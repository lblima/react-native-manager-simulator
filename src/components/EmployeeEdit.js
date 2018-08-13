import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeSave, employeeUpdate, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { showModal: false };
    }

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    
    onTextPress() {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shift is ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;
        
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {       
        return (
            <Card>
               <EmployeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                 <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                 <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;

    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, 
                        {
                            employeeSave, 
                            employeeUpdate,
                            employeeDelete })(EmployeeCreate);
