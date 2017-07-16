import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';



export default class Header extends React.Component{
  
  render(){
    return(
      <AppBar position="static">
        <Toolbar className="flexbox">
          <Link to='/'>
            <Typography type="title" color="inherit">
              Flask React App with MySQL
            </Typography>
          </Link>
          <Link to='/showSignUp'>
            <Button  color="contrast">
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
  

}