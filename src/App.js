import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor(props) {
        super(props);

        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyCjIJltOk6spKS96RNFCdpbPduZ6pEw8CA',
            authDomain: 'managersimulator.firebaseapp.com',
            databaseURL: 'https://managersimulator.firebaseio.com',
            projectId: 'managersimulator',
            storageBucket: 'managersimulator.appspot.com',
            messagingSenderId: '179568121809'
        };

        firebase.initializeApp(config);
    }

    render() {
        // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
