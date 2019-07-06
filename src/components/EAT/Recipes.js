import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

export default class Recipes extends Component {
    render(){
        return(
            <>
            <h1>Recipes</h1>
            <div className="flex-container">
                <section>
                        <Link to={routes.PN1}>
                    <div className="image">
                        <img src="../smoothie.png" />
                    </div>
                        </Link>
                    <div className="title">
                        <span>Nutrition Point 1</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PN1}>
                    <div className="image">
                    <img src="../fruit.png" />
                    </div>
                    </Link>
                    <div className="title">
                        <span>Nutrition Point 2</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PN1}>
                    <div className="image">
                    <img src="../pizza.png" />
                    </div>
                    </Link>
                    <div className="title">
                        <span>Nutrition Point 3</span>
                    </div>
                </section>
            </div>
            </>
        )
    }
}