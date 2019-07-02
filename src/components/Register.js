import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        verify_password: '',
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
                e.preventDefault();
                const registerResponse = await fetch('http://localhost:8000/users/register', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(this.state),
                    headers: {
                        'Content-type' : 'application/json'
                    }
                })
                const parsedResponse = await registerResponse.json();
                console.log(parsedResponse, "<----- parsedResponse")
                console.log(parsedResponse.user, "<----- parsedResponse.user")
                if(parsedResponse) {
                    this.props.doSetCurrentUser(parsedResponse)
                        this.setState({
                            logged: true,
                        })
                }
            }

    render(){
        const { username, password, email, verify_password } = this.state

        return(
            <>
                { this.state.logged
                ? <Redirect to={`http://localhost:8000/users/:id`}/>
                : <RegisterForm changeHandler={this.changeHandler} onSubmit={this.onSubmit} username={username} password={password} value={email} value={verify_password}/>
                }            
            </>
        )
    }
}

const RegisterForm = ({changeHandler, onSubmit, email, username, password, verify_password}) => 
    <section  className="enter">
            <h1>Login / Register</h1>
            <span>Place Holder</span><br /><br />
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" placeholder="Your Name Here" name="username" onChange={e => changeHandler(e)} value={username}></input><br />
            <input type="text" placeholder="Your Email Here" name="email" onChange={e => changeHandler(e)} value={email}></input><br />
            <input type="password" placeholder="Your Password" name="password" onChange={e => changeHandler(e)} value={password}></input><br />
            <input type="password" placeholder="Verify Password" name="verify_password" onChange={e => changeHandler(e)} value={verify_password}></input><br />
            <button type="submit">Register</button>
        </form>
    </section>