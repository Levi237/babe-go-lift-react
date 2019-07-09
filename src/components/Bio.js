import React, { Component } from 'react'

export default class Bio extends Component {
    render(){
        return(
            <>
                <h1>Say Hello to Coach Momo</h1>
                <img src="../headshot.png" />
                <section>
                    <a href="https://www.facebook.com/BabeGoLift/"><img src="../facebook-icon.png" /></a>
                    <a href="https://www.instagram.com/momomuscle/"><img src="../instagram-icon.png" /></a>
                </section>
            </>
        )
    }
}