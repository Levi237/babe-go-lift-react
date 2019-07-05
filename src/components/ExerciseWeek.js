import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../constants/routes';

export default class ExerciseWeek extends Component {
    render(){
        return(
            <>
            <h1>Fit in 3 Weekly Workouts</h1>
            <div className="flex-container">
                <section>
                    <div className="image">
                    <Link to={routes.PE1}><img src="dead-lift.png" /></Link>
                    </div>
                    <div className="title">
                        <span>Exercise Day 1</span>
                    </div>
                </section>
                <section>
                    <div className="image">
                    <Link to={routes.PE1}><img src="lat-pull.png" /></Link>
                    </div>
                    <div className="title">
                        <span>Exercise Day 2</span>
                    </div>
                </section>
                <section>
                    <div className="image">
                    <Link to={routes.PE1}><img src="fly.png" /></Link>
                    </div>
                    <div className="title">
                        <span>Exercise Day 3</span>
                    </div>
                </section>
            </div>
            </>
        )
    }
}