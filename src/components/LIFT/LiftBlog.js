import React, { Component } from 'react';

export default class LiftBlog extends Component {
    render(){
        return(
            <>
            <div className="header-container">
                <section>
                    <div className="babeSci">
                        <div className="content">
                        <h1>Babe, Go Lift - Blogs</h1>
                            <span>This is an attempt per our convo Sunday</span>
                        </div>
                        <div className="photo"><img src="../friend.png" alt="LifBlog"/></div>
                    </div>
                </section>
            </div>
            </>
        )
    }
}