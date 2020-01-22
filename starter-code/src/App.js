import React, { Component } from 'react';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Beers from './components/Beers';

class App extends Component {
  state = {
    data: [],
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
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/beers' render={() => <Beers beers={this.state.data} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
