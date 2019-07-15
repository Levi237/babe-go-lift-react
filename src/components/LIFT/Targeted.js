import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

export default class Targeted extends Component {
    render(){
        return(
            <>
            <h1>Targeted Workouts</h1>
            <div className="flex-container">
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../dead-lift.png" alt="Exercise1" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Booty</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../lat-pull.png" alt="Exercise2" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Abs</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../fly.png" alt="Exercise3" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Arms</span>
                    </div>
                </section>
            </div>

            <div className="flex-container">
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../dead-lift.png" alt="Exercise1" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Lower Body</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../lat-pull.png" alt="Exercise2" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Upper Body</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../fly.png" alt="Exercise3" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Full Body</span>
                    </div>
                </section>
            </div>
            </>
        )
    }
}