import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import MovieContainer from '../components/MoviesContainer';
import movies from '../components/movies';

it ('renders correctly', ()=>{
    const component = renderer.create(<MovieContainer />);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});

it ('loads movie details when some movie is selected', ()=>{
    const component = mount(<MovieContainer />);
    const movieslist = component.find('.movie')
    expect(component.find('.movie').length).toEqual(7);
    expect(component.state('selectedMovie')).toBeNull();
    movieslist.at(0).simulate('click');
    expect(component.state('selectedMovie')).toEqual(movies.data[6]);
    expect(component.state('moviesOfTheSameGenre').length).toEqual(1);
});

it ('shows no results if there is no results', ()=>{
    const component = mount(<MovieContainer />);
    component.find('input').instance().value="fgs";
    component.find('#search').simulate('click');
    expect(component.state('list').length).toBe(0);
});