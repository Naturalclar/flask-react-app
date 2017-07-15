import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
  render(){
    return(
      <AppBar
        title="Flask React App with MySQL"
        iconElementRight={
          <div>
            <FlatButton
              label="Home"
            />
            <FlatButton
              label="Sign Up" 
            />
          </div>
        }
      />
    );
  }
}