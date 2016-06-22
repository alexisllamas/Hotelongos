import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import spacing from 'material-ui/styles/spacing';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import AccountsUI from '../components/AccountsUI';

const SelectableList = MakeSelectable(List);

const style = {
  title: {
    cursor: 'pointer',
  },
  position: 'fixed',
  top: 0,
  fixed: 'top left',
}

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() { return this.setState({open: !this.state.open}); }

  handleClose() { this.setState({open: false}); }

  goHome() {
    this.justGoHome();
    this.setState({open: !this.state.open});
  }

  justGoHome() {
    FlowRouter.go('/');
  }

  goAbout() {
    FlowRouter.go('/about');
    this.setState({open: !this.state.open});
  }

  goGithub() {
    FlowRouter.go('https://github.com/callemall/material-ui');
    this.setState({open: !this.state.open});
  }

  handleRequestChangeLink(event, value) {
    window.location = value;
  }
  render() {
    const styleRight = {
      a: { 
        color: "#FFF",
        textDecoration: "none",
        lineHeight: "36px",
        fontSize: "1.2em",
        borderBottom: "4px solid transparent",
      },
      "a:hover": {
            borderColor: "#82D8D8" ,
      },
    }
    return (
      <div>
        <AppBar
          title={<span style={style.title}>Hotelongos</span>}
          zDepth={0}
          style={style}
          iconElementRight={<AccountsUI />}
          onTitleTouchTap ={this.justGoHome}
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          iconStyleRight={styleRight}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Hotelongos" showMenuIconButton={false} />
          <MenuItem onTouchTap={this.goHome.bind(this)}>Inicio</MenuItem>
          <MenuItem onTouchTap={this.goAbout.bind(this)}>Acerca</MenuItem>
          <Divider />
          <SelectableList
            value=""
            onChange={this.handleRequestChangeLink.bind(this)}
          >
            <Subheader>Recursos</Subheader>
            <ListItem primaryText="GitHub" value="https://github.com/callemall/material-ui" />
            <ListItem
              primaryText="Material Design"
              value="https://www.google.com/design/spec/material-design/introduction.html"
            />
          </SelectableList>

        </Drawer>
      </div>
    );
  }
}


export default Header;