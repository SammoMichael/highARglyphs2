import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';
import DeckCreateForm from './deck_create_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    formType: 'create'
});

const mapDispatchToProps = dispatch => {
    return ({
        createDeck: deck => dispatch(createDeck(deck)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckCreateForm);

