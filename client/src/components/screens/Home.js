import React from 'react';
import axios from 'axios';

const http = axios.create({
    baseURL: 'https://hoblist.com',
    headers: {"Access-Control-Allow-Origin": "*"}
});

export default class Home extends React.Component{
    state = {
        movies: [],
    };

    componentDidMount(){
        
        const body ={
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
        }
        //axios.post(`https://hoblist.com/movieList`, body)
        http.post('movieList', body)
        .then(res => {
            console.log(res);
            this.setState({movies: res.data});
        });
    }
    render(){
        return <ul>
            {this.state.movies.map(movie => <li>{movie}</li> )}
        </ul>
    }
}    
