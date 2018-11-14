import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
 } from 'react-router-dom';

 import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

 const App = () => (
     <div>
         <header>
             <h1>highARglyphs</h1>
         </header>
             <Link to="/login">Login</Link>
             <Link to="/signup">Signup</Link>
         <Switch>
         <Route path="/login" component={LoginFormContainer} />
         <Route path="/signup" component={SignUpFormContainer} />
         </Switch>
     </div>
 );

 export default App;
