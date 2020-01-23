import React, { Component } from 'react';
import Header from "./Header"
import { Link } from "react-router-dom";


class Beers extends Component {

    render() {
        console.log(this.props.beers);
        return (
            <div>
                <Header/>
                <ul>
                    {this.props.beers.map((beer, index) => {
                        return (
                            <Link key={index} to={`/beers/${beer._id}`}>
                                <li>
                                    <h4>{beer.name}</h4>
                                    <img src={beer.image_url} alt={beer.name} />
                                    <p>{beer.tagline}</p>
                                    <p>Created by: {beer.contributed_by}</p>

                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Beers