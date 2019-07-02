import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../constants/routes';

export default class NutritionWeek extends Component {
    render(){
        return(
            <>
            <h1>My Weekly Nutrition Program</h1>
            <div className="flex-container">
                <section>
                    <div className="image">
                        <Link to={routes.PN1}><img src="smoothie.png" /></Link>
                    </div>
                    <div className="title">
                        <span>Nutrition Point 1</span>
                    </div>
                </section>
                <section>
                    <div className="image">
                    <Link to={routes.PN1}><img src="fruit.png" /></Link>
                    </div>
                    <div className="title">
                        <span>Nutrition Point 2</span>
                    </div>
                </section>
                <section>
                    <div className="image">
                    <Link to={routes.PN1}><img src="pizza.png" /></Link>
                    </div>
                    <div className="title">
                        <span>Nutrition Point 3</span>
                    </div>
                </section>
            </div>
            </>
        )
    }
}