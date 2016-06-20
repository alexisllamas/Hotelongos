import React from 'react';
import {darkBlack, teal500, teal700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AccountsUI from '../components/AccountsUI';

const muiTheme = getMuiTheme({
  palette: {
  	primary1Color: teal500,
  	primary2Color: teal700,
    textColor: darkBlack
  },
  appBar: {
    height: 50,
  },
});
injectTapEventPlugin();

export const MainLayout = ({content}) => (
	<MuiThemeProvider muiTheme={muiTheme}>
	<div className="main-layout">
		<header>
				<a href="/"><h2>Hotelongos</h2></a>
				<nav>
					<a href="/">Inicio</a>
					<a href="/about">Sobre Nosotros</a>
	                <AccountsUI />
				</nav>
		</header>
		<main>
			{content}
		</main>		
	</div>
	</MuiThemeProvider>
);