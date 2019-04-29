import Kill_Bill_Volume_1 from '../images/Kill_Bill_Volume_1.png';
import Kill_Bill_Volume_2 from '../images/Kill_Bill_Volume_2.png';
import Pulp_Fiction from '../images/Pulp_Fiction.png';
import Jackie_Brown from '../images/Jackie_Brown.png'
import Reservoir_Dogs from '../images/Reservoir_Dogs.png'
import Four_Rooms from '../images/Four_Rooms.png'
import Django_Unchained from '../images/Django_Unchained.png'

var movies = {
    data:[
        {
            id:"1",
            title:"Kill Bill: Vol1",
            genres:["Actions&Advanture"],
            release_date:"October 10, 2003",
            vote_average: 10,
            poster_path:Kill_Bill_Volume_1,
            runtime:111,
            overview:"Kill Bill: Vol1 overview"
        },
        {
            id:"2",
            title:"Kill Bill: Vol2",
            genres:["Actions&Advanture"],
            release_date: "April 16, 2004",
            vote_average: 8,
            poster_path:Kill_Bill_Volume_2,
            runtime:136,
            overview:"Kill Bill: Vol1 overview"
        },
        {
            id:"3",
            title:"Pulp fiction",
            genres:["Oscar-winning movies"],
            release_date: "September 10, 1994",
            vote_average: 7,
            poster_path:Pulp_Fiction,
            runtime:154,
            overview:"Pulp fiction overview"
        },
        {
            id:"4",
            title:"Jackie Brown",
            genres:["Drama"],
            release_date: "December 25, 1997",
            vote_average: 9,
            poster_path:Jackie_Brown,
            runtime:154,
            overview:"Jackie Brown overview"
        },
        {
            id:"5",
            title:"Reservoir dogs",
            genres:["Independent movies"],
            release_date: "January 21, 1992",
            vote_average: 3,
            poster_path:Reservoir_Dogs,
            runtime:99,
            overview:"Reservoir dogs overview"
        },
        {
            id:"6",
            title:"Four rooms",
            genres:["Comedy"],
            release_date: "December 9, 1995",
            vote_average: 5,
            poster_path:Four_Rooms,
            runtime:104,
            overview:"Four rooms overview"
        },
        {
            id:"7",
            title:"Django unchained",
            genres:["Drama"],
            release_date: "January 17, 2013",
            vote_average: 6,
            poster_path:Django_Unchained,
            runtime:165,
            overview:"Django unchained overview"
        }
    ]
};

export default movies;