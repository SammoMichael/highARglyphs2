import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, loginDemoUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        loginDemoUser: () => dispatch(loginDemoUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
