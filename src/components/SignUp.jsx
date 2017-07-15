import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SignUp extends React.Component {
  render() {
    return(
      <div>
        <TextField
          hintText="user name"
        />
        <br />
        <br />
        <TextField
          hintText="email address"
        />
        <br />
        <br />
        <TextField
          hintText="password"
        />
        <br />
        <br />
        <RaisedButton label="Sign Up" primary={true} />
      </div>
    );
  }
}