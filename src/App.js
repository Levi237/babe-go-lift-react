import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import LiftBlog from './components/LiftBlog';
import ExerciseWeek from './components/ExerciseWeek';
import NutritionWeek from './components/NutritionWeek';
import WarmUp from './components/programs/WarmUp';
import CoolDown from './components/programs/CoolDown';
import CircuitOne from './components/programs/CircuitOne';
import Nutrition from './components/Nutrition';


import * as routes from './constants/routes';

class App extends Component {
  state = {
    currentUser: [],
  }

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }
  logoutUser = () => {
    this.setState({
      currentUser: null
    })
    // this.props.history.push(routes.LIFT)
  }

  render(){
    const { currentUser } = this.state
    return(
      <div className="grid-container">
        <div className="grid-nav">
        <h1>Babe, Go Lift.</h1>
          <Nav currentUser={currentUser} logoutUser={this.logoutUser} />
        </div>

        <div className="grid-header">
        
          { !currentUser &&
            <>
            <Register doSetCurrentUser={this.doSetCurrentUser}/><br /><br />
            <Login doSetCurrentUser={this.doSetCurrentUser}/>
            </>
          }

        <Switch>
          <Route exact path={routes.LIFT} render={() =>
            currentUser &&
            <LiftBlog />
          }/>
          <Route exact path={routes.PE1} render={() =>
            currentUser &&
            <WarmUp /> 
          }/>
        </Switch>
        </div>

        <div className="grid-main">
        <Switch>
          <Route exact path={routes.LIFT} render={() =>
            currentUser &&
            <ExerciseWeek /> 
          }/>
          <Route exact path={routes.PE1} render={() =>
            currentUser &&
            <CircuitOne />
          }/>
        </Switch>
        </div>

        <div className="grid-bottom">
        <Switch>
          <Route exact path={routes.LIFT} render={() =>
            currentUser &&
            <NutritionWeek /> 
          }/>
          <Route  path={routes.PE1} render={() =>
            currentUser &&
            <CoolDown />
          }/>
          <Route exact path={routes.PN1} render={() =>
            currentUser &&
            <Nutrition />
          }/>
        </Switch>
        </div>

        <div className="grid-footer">
        
        </div>
      </div>
    )
  }
}

export default App;
