import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

export default class Conditioning extends Component {
    render(){
        return(
            <>
            <h1>Conditioning</h1>
            <div className="flex-container">
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../dead-lift.png" alt="Exercise1" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Exercise Day 1</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../lat-pull.png" alt="Exercise2" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Exercise Day 2</span>
                    </div>
                </section>
                <section>
                    <Link to={routes.PE1}>
                        <div className="image">
                            <img src="../fly.png" alt="Exercise3" />
                        </div>
                    </Link>
                    <div className="title">
                        <span>Exercise Day 3</span>
                    </div>
                </section>
            </div>
            </>
        )
    }
}