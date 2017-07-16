import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';



export default class Header extends React.Component{
  
  render(){
    return(
      <div className='header'>
        <AppBar position="static">
          <Toolbar className="flexbox">
            <Link to='/'>
              <Typography type="title" color="inherit">
                Flask React App with MySQL
              </Typography>
            </Link>
            <Link to='/showSignIn'>
              <Button  color="contrast">
                Sign In
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  

}