import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const onSelectCity = (chosenRequest, index) => {
  const city = chosenRequest.substring(0, chosenRequest.indexOf(','));
  if (city.length > 0) {
      FlowRouter.go('/hotels/city/' + city);
  }
}

const SearchCity = ({cities}) => (
	<AutoComplete
    hintText="¿A dónde quieres ir?"
    filter={AutoComplete.caseInsensitiveFilter}
    floatingLabelText="Destino"
    dataSource={cities}
    maxSearchResults={10}
    onNewRequest={onSelectCity}
    fullWidth={true}
    style={{}}
  />
);

export default SearchCity;