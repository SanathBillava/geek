import React from "react";
import axios from "axios";
import { Cards } from "./Cards";


export default class Home extends React.Component {
    state = {
        results: [],
    };

    componentDidMount() {
        axios.post('https://hoblist.com/movieList', {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
        }).then((response) => {
            console.log(response.data.result)
            this.setState({
                results: response.data.result
            })
        }).catch(err => {
            console.log(err)
        })

    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-2 col-xs-12">
                        {this.state.results &&
                            this.state.results.map((data) => {
                                return <Cards datas={data} key={data._id} />;
                            })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}