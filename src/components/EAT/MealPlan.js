import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

export default class MealPlan extends Component {
    render(){
        return(
            <>
            <h1>My Weekly Nutrition Program</h1>
            <div className="scroll">
                <div>
                    <section>
                            <Link to={routes.PN1}>
                        <div className="image">
                            <img src="../smoothie.png" alt="nutrition1" />
                        </div>
                            </Link>
                        <div className="title">
                            <span>Nutrition Day 1</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../fruit.png" alt="nutrition2" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Day 2</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Day 3</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Day 4</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Day 5</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../pizza.png" alt="nutrition3" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Day 6</span>
                        </div>
                    </section>
                    <section>
                        <Link to={routes.PN1}>
                        <div className="image">
                        <img src="../fruit.png" alt="nutrition2" />
                        </div>
                        </Link>
                        <div className="title">
                            <span>Nutrition Day 7</span>
                        </div>
                    </section>
                </div>
            </div>
            </>
        )
    }
}