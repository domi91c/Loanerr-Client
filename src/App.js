import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import {
  Button, Card, CardBody, CardImg, CardSubtitle, CardText,
  CardTitle, Col, Container, Row,
} from 'reactstrap'

class App extends Component {
  render() {
    return (
        <div>
          <Navigation/>
          <br/>
          <Container className="container">
            <Row>
              <Col xs={4}>
                <Card>
                  <CardImg top width="100%"
                           src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                           alt="Card image cap"/>
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title
                      and
                      make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
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
