import React, { Component } from 'react'
import Header from "./Header"

export default class SingleBeer extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id);
        this.props.getOneBeer(id);
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

