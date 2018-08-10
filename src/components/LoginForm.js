import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    } 

    onPasswordChange(password) {
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        console.log(this.props.error);

        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
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

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, error, loading } = state.auth;

    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
