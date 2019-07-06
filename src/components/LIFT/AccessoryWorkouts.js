import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

export default class AccessoryWorkouts extends Component {
    render(){
        return(
            <>
            <h1>Accessory Workouts</h1>
            <div className="flex-container">
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../dead-lift.png" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>TEXT SPAN 1</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../lat-pull.png" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>TEXT SPAN 2</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../fly.png" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>TEXT SPAN 3</span>
                    </div>
                </section>
            </div>
            </>
        )
    }
}