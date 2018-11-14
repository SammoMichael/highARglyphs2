import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
     }
  
    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    Welcome to highARglyphs!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    <div className="login-form">
                    <label>Username
                        <input 
                         type="text"
                         value={this.state.username}
                         onChange={this.update('username')}
                         className="login-input"/>
                    </label>
                    <br/>
                        <label>Password
                        <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input" />
                        </label>
                    <input className="session-submit" type="submit" value={this.props.fromType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);