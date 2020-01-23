import React, { Component } from 'react';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer'
import axios from 'axios'
import './App.css';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer'

class App extends Component {
  state = {
    data: [],
    random: "",
    singleBeer: ""
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(beers => {
        console.log(beers.data);
        this.setState({ data: beers.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getRandomBeer = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(randomBeer => {
      console.log(randomBeer);
      this.setState({ random: randomBeer.data});
    })
    .catch(error => {
      console.log(error);
    })
  }

  getOneBeer = (id) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then(oneBeer => {
      this.setState({ singleBeer : oneBeer.data})
      
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/beers' render={() => <Beers beers={this.state.data} />}></Route>
          <Route path='/random'render={() => <RandomBeer getRandomBeer={this.getRandomBeer} beer={this.state.random}/>}></Route>
          <Route exact path='/beers/:id'render={(props) => <SingleBeer {...props} getOneBeer={this.getOneBeer} beer={this.state.singleBeer}/>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
