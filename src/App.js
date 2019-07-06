import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import LiftBlog from './components/LIFT/LiftBlog';
import ExerciseWeek from './components/LIFT/ExerciseWeek';
import MealPlan from './components/EAT/MealPlan';
import WarmUp from './components/LIFT/programs/WarmUp';
import CoolDown from './components/LIFT/programs/CoolDown';
import CircuitOne from './components/LIFT/programs/CircuitOne';
import Nutrition from './components/Nutrition';
import AccessoryWorkouts from './components/LIFT/AccessoryWorkouts'
import Conditioning from './components/LIFT/Conditioning'
import Recipes from './components/EAT/Recipes'
import Groceries from './components/EAT/Groceries'
import EatBlog from './components/EAT/EatBlog'


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
          <Route exact path={routes.LIFT} render={() => currentUser &&
            <LiftBlog /> }/>
          <Route exact path={routes.EAT} render={() => currentUser &&
            <EatBlog /> }/>
          <Route exact path={routes.PE1} render={() => currentUser &&
            <WarmUp />  }/>
        </Switch>
        </div>

        <div className="grid-main">
        <Switch>
          <Route exact path={routes.LIFT} render={() => currentUser &&
            <ExerciseWeek /> }/>
          <Route exact path={routes.EAT} render={() => currentUser &&
            <MealPlan />  }/>
          <Route exact path={routes.PE1} render={() => currentUser &&
            <CircuitOne /> }/>
        </Switch>
        </div>

        <div className="grid-second">
        <Switch>
          <Route exact path={routes.LIFT} render={() => currentUser &&
            <AccessoryWorkouts /> }/>
          <Route exact path={routes.EAT} render={() => currentUser &&
            <Recipes /> }/>
          <Route  path={routes.PE1} render={() => currentUser &&
            <CoolDown /> }/>
          <Route exact path={routes.PN1} render={() => currentUser &&
            <Nutrition /> }/>
        </Switch>
        </div>

        <div className="grid-third">
        <Switch>
          <Route exact path={routes.LIFT} render={() => currentUser &&
            <Conditioning /> }/>
          <Route exact path={routes.EAT} render={() => currentUser &&
            <Groceries /> }/>
          <Route  path={routes.PE1} render={() => currentUser &&
            <CoolDown /> }/>
          <Route exact path={routes.PN1} render={() => currentUser &&
            <Nutrition /> }/>
        </Switch>
        </div>

        <div className="grid-footer">
        
        </div>
      </div>
    )
  }
}

export default App;
