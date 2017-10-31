import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import {
  Button, Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText,
  CardTitle, Col, Container, Form, FormGroup, FormText, Input, Label, Row,
} from 'reactstrap'

class App extends Component {
  render() {
    return (
        <div>
          <Navigation/>
          <br/>
          <Container>
            <Row>
              <Col xs={6} className="mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail"
                               placeholder="with a placeholder"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password"
                               id="examplePassword"
                               placeholder="password placeholder"/>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox"/>{' '}
                          Remember me
                        </Label>
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}

export default App
