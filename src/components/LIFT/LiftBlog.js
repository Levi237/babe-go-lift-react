import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
// import * as routes from '../../constants/routes';

export default class LiftBlog extends Component {
    render(){
        return(
            <>
            <h1>Babe, Go Lift - Blogs</h1>
            <div className="sciWeek-container">
                <section>
                    <div className="babeSci">
                        <div className="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="photo"><img src="../sci.png" alt="LifBlog"/></div>
                    </div>
                </section>
            </div>
            </>
        )
    }
}