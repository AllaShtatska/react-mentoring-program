import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from '../components/MovieDetails';

it ('renders correctly', ()=>{
    const movie = {
        id: "1",
        title: "Kill Bill: Vol1",
        genres: ["Actions&Advanture"],
        release_date: "October 10, 2003",
        vote_average: 10,
        poster_path: '../images/Kill_Bill_Volume_1.png',
        runtime: 111,
        overview: "Kill Bill: Vol1 overview"
    };

    const component = renderer.create(<MovieDetails selectedMovie={movie}/>);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});