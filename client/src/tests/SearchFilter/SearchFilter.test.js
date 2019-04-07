import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import SEARCH_FILTER_TYPE from '../../components/SearchFilter/searchFilterType';

it ('renders correctly if title is selected as a filter', ()=>{
    const component = renderer.create(<SearchFilter currentFilter={SEARCH_FILTER_TYPE.title} filter={SEARCH_FILTER_TYPE.title} onSwitchFilter={function(){}}/>);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});

it ('should trigger switch filter on click', ()=>{
    const switchFilter = jest.fn();
    const component = shallow(<SearchFilter currentFilter={SEARCH_FILTER_TYPE.title} filter={SEARCH_FILTER_TYPE.genre} onSwitchFilter={switchFilter}/>);

    component.find('button').simulate('click');

    expect(switchFilter).toHaveBeenCalled();
    expect(switchFilter).toBeCalledWith(SEARCH_FILTER_TYPE.genre);
});