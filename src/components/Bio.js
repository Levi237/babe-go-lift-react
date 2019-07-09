import React, { Component } from 'react'

export default class Bio extends Component {
    render(){
        return(
            <>
                <h1>Say Hello to Coach Momo</h1>
                <img className="imgBio" src="../headshot.png" />
                <br />
                <a href="https://www.facebook.com/BabeGoLift/"><img className="iconBio" src="../facebook-icon.png" /></a>
                <a href="https://www.instagram.com/momomuscle/"><img className="iconBio" src="../instagram-icon.png" /></a>
            </>
        )
    }
}