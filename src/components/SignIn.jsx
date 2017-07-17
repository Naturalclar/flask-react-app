import React from 'react';
import Input from 'material-ui/Input/Input';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col }  from 'react-flexbox-grid';

export default class SignIn extends React.Component {
  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col md={6} xs={10}>
                <Paper className="content">
                  <Input
                    placeholder="user name or email"
                  />
                  <br />
                  <br />
                  <Input
                    placeholder="password"
                  />
                  <br />
                  <br />
                  <Button raised color="primary">Sign In</Button>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}