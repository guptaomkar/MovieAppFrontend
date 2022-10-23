import React, { Component } from "react";
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            flag: false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:5000/data/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                    flag: true
                });
            })
    }

    render() {

        const { flag, data } = this.state;
        if (!flag) {
            return (
                <div>
                    <h1>Please wait some data....</h1>
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Marvel movie List</h1>  {
                    data.map((item) => (
                        <div className="movieCard">
                            <b>Movie Name:</b> {item.movieName},
                            <br></br>
                            <b>release Date:</b> {item.releaseDate}
                        </div>

                        
                    ))
                }
            </div>
        );
    }


}

// function callApi() {
//     fetch('http://localhost:5000/data/', { method: 'GET' })
//         .then(data => data.json()) // Parsing the data into a JavaScript object
//         .then(json => <h1>JSON.stringify(json)</h1>) // Displaying the stringified data in an alert popup
// }




export default Home;