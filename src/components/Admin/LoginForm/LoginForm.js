import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';
import style from './LoginForm.module.css';
import { adminService } from '../../../services/adminService';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    logIn = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {
        adminService.post(this.state)
            .then(response => console.log(response))
    }

    render() {
        return (
            <Container>
                <div className={style.login}>
                    <i className={`fa fa-user ${style.user}`}></i>
                    <TextInput
                        className={style.text}
                        email
                        id="TextInput-4"
                        label="Email"
                        name='email'
                        validate
                        onChange={this.logIn}
                    />
                    <TextInput
                        className={style.text}
                        id="TextInput-3"
                        label="Password"
                        name='password'
                        password
                        onChange={this.logIn}
                    />
                    <Button onClick={this.submitData}>Login</Button>
                </div>
            </Container>
        )
    }
}

export { LoginForm };