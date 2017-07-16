import React from 'react';
import Input from 'material-ui/Input/Input';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import { Grid, Row, Col }  from 'react-flexbox-grid';

export default class Home extends React.Component {
  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col md={6} xs={10}>
                <Paper className="content">
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
                  <br />
                  <br />
                  <Typography>
                    Already have an account? <Link to="/showSignIn">sign in</Link>.
                  </Typography>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}