import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

export default class MealPlan extends Component {
    render(){
        return(
            <>
            <h1>My Weekly Nutrition Program</h1>
            <div className="outer-scroll">
                <div className="inner-scroll">
                    <section>
                            <Link to={routes.PN1}>
                        <div className="image">
                            <img src="../smoothie.png" alt="nutrition1" />
                        </div>
                            </Link>
                        <div className="title">
                            <span>Nutrition Point 1</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../fruit.png" alt="nutrition2" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Point 2</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Point 3</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Point 3</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Point 3</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Point 3</span>
                        </div>
                    </section>
                </div>
            </div>
            </>
        )
    }
}