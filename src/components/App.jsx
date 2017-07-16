import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import SignIn from './SignIn.jsx';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Header />   
          <div className='content'>
            <Route exact path='/' component={Home}/>
            <Route path='/showSignIn' component={SignIn}/>        
          </div>
        </div>
      </Router>
    );
  }
}

