import React, { Component } from 'react'
import Header from "./Header"

export default class RandomBeer extends Component {
    componentDidMount() {
        this.props.getRandomBeer();
        console.log(this.props);
    }


    render() {
        const { beer } = this.props
        return (
            <div>
            <Header/>
            <img src={beer.image_url} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>  
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p> 
            </div>
        )
    }
}
