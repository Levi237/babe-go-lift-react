import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Switch, Route, withRouter } from 'react-router-dom';


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
import LatestBlog from './components/BLOG/LatestBlog'
import BlogList from './components/BLOG/BlogList'


import * as routes from './constants/routes';

class App extends Component {
  state = {
    currentUser: null,
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
        { currentUser
        ? <h1>{currentUser.username}, Go Lift.</h1>
        : <h1>Babe, Go Lift.</h1>
        }
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
          <Route path={routes.BLOG} exact render={() => <LatestBlog /> }/>
          <Route path={routes.LIFT} exact render={() => currentUser.username && <LiftBlog /> }/>
          <Route path={routes.PE1}  exact render={() => currentUser.username && <WarmUp />  }/>
          <Route path={routes.EAT}  exact render={() => currentUser.username && <EatBlog /> }/>
        </Switch>
        </div>

        <div className="grid-main">
        <Switch>
          <Route path={routes.BLOG} exact render={() => <BlogList /> }/>
          <Route path={routes.LIFT} exact render={() => currentUser.username && <ExerciseWeek /> }/>
          <Route path={routes.PE1}  exact render={() => currentUser.username && <CircuitOne /> }/>
          <Route path={routes.EAT}  exact render={() => currentUser.username && <MealPlan />  }/>
        </Switch>
        </div>

        <div className="grid-second">
        <Switch>
          <Route path={routes.LIFT} exact render={() => currentUser.username && <AccessoryWorkouts /> }/>
          <Route path={routes.PE1}  exact render={() => currentUser.username && <CoolDown /> }/>
          <Route path={routes.EAT}  exact render={() => currentUser.username && <Recipes /> }/>
          <Route path={routes.PN1}  exact render={() => currentUser.username && <Nutrition /> }/>
        </Switch>
        </div>

        <div className="grid-third">
        <Switch>
          <Route path={routes.LIFT} exact render={() => currentUser.username && <Conditioning /> }/>
          <Route path={routes.PE1}  exact render={() => currentUser.username && <CoolDown /> }/>
          <Route path={routes.EAT}  exact render={() => currentUser.username && <Groceries /> }/>
          <Route path={routes.PN1}  exact render={() => currentUser.username && <Nutrition /> }/>
        </Switch>
        </div>

        <div className="grid-footer">
        
        </div>
      </div>
    )
  }
}

export default App;
