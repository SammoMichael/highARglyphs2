import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout, clearErrors } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return ({
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
