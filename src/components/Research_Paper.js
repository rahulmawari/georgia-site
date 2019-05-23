import React, {Component} from 'react';
import {Modal, Button, Row, Col, Navbar, Nav, ButtonToolbar} from 'react-bootstrap';
import Widget from './widget';
import Filter from './Filter';

class Paper extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          show: false,
        };
    
        this.handleShow = () => {
          this.setState({ show: true });
        };
    
        this.handleHide = () => {
          this.setState({ show: false });
        };
      }

    render(){
        return(
            <>
            <Button variant="primary" onClick={this.handleShow}>
                View
            </Button>

            <Modal size="lg" show={this.state.show} onHide={this.handleHide} aria-labelledby="custom modal" dialogClassName="paper">
                <Modal.Header closeButton>
                    <Modal.Title id="custom modal">Paper Title <span></span> By Author</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col xs={4}>
                    <h3>Abstract</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </Col>
                    <Col>
                      <Navbar bg="dark" variant="dark"> 
                        <Nav className="mr-auto">
                          <Filter/>
                          <Filter/>
                          <Filter/>
                        </Nav>
                      </Navbar>
                      <Widget/>
                      <Widget/>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">Learn more >></Button>
                </Modal.Footer>
            </Modal>
        </>
        );
    }
}

export default Paper;