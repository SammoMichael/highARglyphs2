import { connect } from 'react';
import Speech from './speech';

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return dispatch;
};

export default connect(mapStateToProps, mapDispatchToProps)(Speech);
