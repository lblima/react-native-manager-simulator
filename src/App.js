import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import reducers from './reducer';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor(props) {
        super(props);

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCjIJltOk6spKS96RNFCdpbPduZ6pEw8CA",
            authDomain: "managersimulator.firebaseapp.com",
            databaseURL: "https://managersimulator.firebaseio.com",
            projectId: "managersimulator",
            storageBucket: "managersimulator.appspot.com",
            messagingSenderId: "179568121809"
        };

        firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
