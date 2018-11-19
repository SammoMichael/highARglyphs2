import React from 'react';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import Splash from './splash';
import Modal from './modal/modal';
import DeckIndexContainer from './deck/deck_index_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

 const App = () => (
   <div >
      <div>
        <Modal />
      </div>
      <header>
         <nav className="header-nav">
                <GreetingContainer />
            <Link to='/' className='header-link'>
               <nav className='BrandingNav'>
                  <div className="icon-logo-box">
                     <h1 className='icon-logo'>""</h1>
                  </div>
                     <h1 className="app-name">highARglyphs</h1>
               </nav>
            </Link>                   
         </nav>  
      </header>  
            <Switch>
               <ProtectedRoute path="/decks" component={DeckIndexContainer} />
               <Route path="/" component={Splash} />
            </Switch> 
   </div> 
 );

 export default App;
