import React, { Component } from 'react'


class Beers extends Component {

    render() {
        console.log(this.props.beers);
        return (
            <div>
                <ul>
                    {this.props.beers.map((beer, index) => {
                        return (
                            <li key={index}>
                                <img src={beer.image_url} alt={beer.name} />
                                <h4>{beer.name}</h4>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>

                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Beers