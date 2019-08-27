import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitLogin = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch('http://localhost:8000/users/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type' : 'application/json'
            }    
        })
        const parsedResponse = await loginResponse.json();
        if(parsedResponse.user) {
            this.props.doSetCurrentUser(parsedResponse.user)
                this.setState({
                    logged: true
                })
            }
            
    }

    render(){
        const { email, password, logged } = this.state

        return(
            logged
            ? <Redirect to={'/home'} />
            : <section className="enter">
                <form onSubmit={this.submitLogin}>
                    <input type="text" placeholder="Your Name Here" name="email" onChange={this.changeHandler} value={email}></input><br />
                    <input type="password" placeholder="Your Password" name="password" onChange={this.changeHandler} value={password}></input><br />
                    <button type="submit">Login</button>
                </form>
            </section>
        )
    }
}