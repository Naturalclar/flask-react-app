import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import { Grid, Row, Col }  from 'react-flexbox-grid';
import 'whatwg-fetch';

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      inputName: 'hello world',
      inputEmail: '',
      inputPassword: ''
    };
  }

  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col md={6} xs={10}>
                <Paper className="content">
                  <form>
                    <TextField
                      placeholder="user name"
                      label="user name"
                      value={ this.state.inputName }
                      onChange={event => this.setState({inputName: event.target.value })}
                    />
                    <br />
                    <br />
                    <TextField
                      placeholder="email address"
                      label="email address"
                      onChange={event => this.setState({inputEmail: event.target.value })}
                    />
                    <br />
                    <br />
                    <TextField
                      placeholder="password"
                      label="password"
                      type="password"
                      onChange={event => this.setState({inputPassword: event.target.value })}
                    />
                    <br />
                    <br />
                    <Button raised color="primary" onClick={this.handleSubmit.bind(this)}>Sign Up</Button>
                    <br />
                    <br />
                    <Typography>
                      Already have an account? <Link to="/showSignIn">sign in</Link>.
                    </Typography>
                  </form>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
  handleSubmit(){
    fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
  }
}