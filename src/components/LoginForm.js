import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    } 

    onPasswordChange(password) {
        this.props.passwordChanged(password);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='Type your email address'
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}  
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label='Password'
                        placeholder='Password'
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}  
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password } = state.auth;

    return {
        email,
        password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
