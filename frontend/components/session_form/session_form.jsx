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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
     }

     handleDemoLogin(e) {
         e.preventDefault();
         this.props.loginDemoUser();
     }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li 
                    className="error-li"    
                    key={`error-${i}`}
                    >
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

  
    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    Welcome to highARglyphs!
                    <br />
                    Please {this.props.formType} {this.props.otherForm}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="login-form">
                    <br />
                    <label>Username
                        <input 
                         type="text"
                         value={this.state.username}
                         onChange={this.update('username')}
                         className="login-input" 
                        />
                    </label>
                    <br />
                        <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input" 
                        />
                        </label>
                        <input 
                        className="session-submit" 
                        type="submit" 
                        value={this.props.formType} />
                    </div>
                </form>
                        <button onClick={this.props.loginDemoUser}>Demo User</button>
            </div>
        );
    }
}

export default withRouter(SessionForm);
