import React, { Component } from 'react'

export default class Bio extends Component {
    render(){
        return(
            <>
                <h1>Say Hello to Coach Momo</h1>
                <img src="headshot.png" alt="bio-pic"/>
                <section>
                    <a href="https://www.facebook.com/BabeGoLift/"><img src="facebook-icon.png" alt="fb-icon"/></a>
                    <a href="https://www.instagram.com/momomuscle/"><img src="instagram-icon.png" alt="insta-icon"/></a>
                </section>
            </>
        )
    }
}