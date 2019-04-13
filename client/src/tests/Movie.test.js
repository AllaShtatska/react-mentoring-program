import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Movie from '../components/Movie';

const movie = {
    id: "1",
    title: "Kill Bill: Vol1",
    genre: ["Actions&Advanture"],
    release_date: "October 10, 2003",
    vote_average: 10,
    poster_path: '../images/Kill_Bill_Volume_1.png',
    runtime: 111,
    overview: "Kill Bill: Vol1 overview"
};


it ('renders correctly', ()=>{
    const component = renderer.create(<Movie key={movie.id} movie={movie} onSelectMovie={function(){}}/>);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});

it ('should trigger select movie on click', ()=>{
    const selectMovie = jest.fn();
    const component = shallow(<Movie key={movie.id} movie={movie} onSelectMovie={selectMovie}/>);

    component.find('.movie').simulate('click');

    expect(selectMovie).toHaveBeenCalled();
    expect(selectMovie).toBeCalledWith(movie);
});