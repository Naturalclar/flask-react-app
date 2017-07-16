import React from 'react';
import Input from 'material-ui/Input/Input';
import Button from 'material-ui/Button';

export default class SignUp extends React.Component {
  render() {
    return(
      <div>
        <Input
          placeholder="user name"
        />
        <br />
        <br />
        <Input
          placeholder="email address"
        />
        <br />
        <br />
        <Input
          placeholder="password"
        />
        <br />
        <br />
        <Button raised color="primary">Sign Up</Button>
      </div>
    );
  }
}