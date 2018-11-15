import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
 } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
 import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

 const App = () => (
     <div >
         <div>
            <Modal />
         </div>
         <header>
            <nav className="header-nav">
             <Link to='/' className='header-link'>
             <h1 className="app-name">highARglyphs</h1>
             <h1 className='icon-logo'>""</h1>
             </Link>
             <GreetingContainer />
         <div className='main-div'>
         <Switch>
         <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute exact path="/signup" component={SignUpFormContainer} />
         </Switch>
         </div>
            </nav>
         </header>
     </div>
 );

 export default App;
