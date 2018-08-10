import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth" initial>
                    <Scene key="login" component={LoginForm} title="Please, log in" />
                </Scene>

                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                    />
                    <Scene 
                        key="employeeCreate" 
                        title="Create Employee" 
                        component={EmployeeCreate} 
                    />
                </Scene>                
            </Scene>
        </Router>
    );
};

export default RouterComponent;

