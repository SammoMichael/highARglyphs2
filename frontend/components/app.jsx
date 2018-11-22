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
import DeckShowContainer from './deck/deck_show_container';
import StudyContainer from './study/study_container';
import CardIndexContainer from './card/card_index_container';

 const App = () => (
   <div >
      <div>
        <Modal />
      </div>
      <header>
         <nav className="header-nav">
               <nav className='BrandingNav'>
                <Link to="/" className="icon-logo-box"></Link> 
                     <div className='icon-logo'></div>
                     <h1 className="app-name">highARglyphs</h1>
                <GreetingContainer />
               </nav>
                             
         </nav>  
      </header>  
               <ProtectedRoute path="/cards/:deckId" component={CardIndexContainer} />
               <ProtectedRoute path="/study/:deckId" component={StudyContainer} />
               <ProtectedRoute path="/decks" component={DeckIndexContainer} />
               <ProtectedRoute path="/decks/:deckId" component={DeckShowContainer} />
               <Route exact path="/" component={Splash} />
   </div> 
 );

 export default App;
