import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
// import * as routes from '../../constants/routes';

export default class EatBlog extends Component {
    render(){
        return(
            <>
            <h1>Babe, Go Eat - Blogs</h1>
            <div className="header-container">
                <section>
                    <div className="babeSci">
                        <div className="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="photo"><img src="../eat.png" alt="eat blog" /></div>
                    </div>
                </section>
            </div>
            </>
        )
    }
}