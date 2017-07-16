import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header.jsx';
import SignUp from './SignUp.jsx';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Header />   
          <Route exact path='/' component={Home}/>
          <Route path='/showSignUp' component={SignUp}/>        
        </div>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return(
      <div>
        Hello World!
      </div>
    );
  }
}