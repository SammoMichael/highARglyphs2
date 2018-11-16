import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, loginDemoUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
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
        loginDemoUser: () => dispatch(loginDemoUser()),
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login 
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
