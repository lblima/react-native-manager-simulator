import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeCreating } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentDidMount() {
        this.props.employeeCreating();
    }
    
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {      
        return (
            <Card>
               <EmployeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
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

export default connect(mapStateToProps, { employeeCreate, employeeCreating })(EmployeeCreate);
