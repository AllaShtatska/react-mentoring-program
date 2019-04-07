import React from 'react';
import renderer from 'react-test-renderer';
import SearchFilterList from '../../components/SearchFilter/SearchFilterList';
import SEARCH_FILTER_TYPE from '../../components/SearchFilter/searchFilterType';

it ('renders correctly', ()=>{
    const component = renderer.create(<SearchFilterList filter={SEARCH_FILTER_TYPE.title} onSwitchFilter={function(){}}/>);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});