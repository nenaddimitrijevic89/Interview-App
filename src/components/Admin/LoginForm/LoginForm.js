import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';
import style from './LoginForm.module.css';
import { adminService } from '../../../services/adminService';
import { storageService } from '../../../services/StorageService';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrongUser: false
        }
    }

    logIn = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {
        adminService(this.state)
            .then(response => {
                storageService.set("accessToken", response.data.accessToken)
                this.props.history.push('/admin/reports')
            })
            .catch(error => {
                console.log(error)
                this.setState({ wrongUser: true })
            })
    }

    render() {
        return (
            <Container>
                <div className={style.login}>
                    <i className={`fa fa-user ${style.user}`}></i>
                    <span className={style.wrongUser}>
                        {this.state.wrongUser ? " wrong email or password" : ""}
                    </span>
                    <TextInput
                        email
                        id="TextInput-4"
                        label="Email"
                        name='email'
                        validate
                        onChange={this.logIn}
                    />
                    <TextInput
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