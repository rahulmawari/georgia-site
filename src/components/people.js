import React, {Component} from 'react';
import {Container, Row, Col, Image, CardDeck, Card} from 'react-bootstrap';
import Slider from "react-slick";


import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
class People extends Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:3,
            slidesToScroll: 3
          };
        return (
            <Container className="people">
                <Row>
                <Col>
                <h1 align="center" className="sec-heading"> Meet the Team </h1>
                <br />
                </Col>
                
                </Row>
                <Row>
                    <Col>
                        <Image src="https://www.scheller.gatech.edu/thumb/width/600/cropratio/1:1/pix/directory/chava_sudeer_profile.jpg" height="250" roundedCircle></Image>
                        <br/><br/>
                        <h4>Sudheer Chava</h4>
                        <p >Alton M. Costley Chair and Professor of Finance <br/>Finance Area Coordinator
                        <br/>Director, Quantitative and Computational Finance (QCF) Program
                        <br/>Director, Financial Services Innovation Lab
                        <br/>Associate Director, Institute for Information Security and Privacy (IISP)
                        <br/>Scheller College of Business
                        <br/>Georgia Institute of Technology
                        <br/> <a href="http://www.prism.gatech.edu/~schava6/">http://www.prism.gatech.edu/~schava6/</a>
                        <br/><a href="http://scholar.google.com/citations?user=AXYf-i8AAAAJ">http://scholar.google.com/citations?user=AXYf-i8AAAAJ</a></p>
                    </Col>
                    
                    <Col>

                    <Slider {...settings}   >
          <div     >
          <Card style={{marginLeft:'100px',marginTop:'20px',width:'250px'}}>
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png" height="100"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Student Name</Card.Title>
                                    <Card.Text>Specialisation</Card.Text>
                                </Card.Body>
                            </Card>
          </div>
          <div>
          <Card style={{marginTop:'20px',marginLeft:'60px',width:'250px'}} >
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png" height="100"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Student Name</Card.Title>
                                    <Card.Text>Specialisation</Card.Text>
                                </Card.Body>
                            </Card>
          </div>
          <div>
          <Card style={{marginTop:'20px',width:'250px'}} >
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png" height="100"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Student Name</Card.Title>
                                    <Card.Text>Specialisation</Card.Text>
                                </Card.Body>
                            </Card>
          </div>
          <div>
          <Card    style={{marginLeft:'100px',marginTop:'20px',width:'250px'}} >
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png" height="100"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Student Name</Card.Title>
                                    <Card.Text>Specialisation</Card.Text>
                                </Card.Body>
                            </Card>
          </div>
          <div>
          <Card   style={{marginTop:'20px',marginLeft:'60px',width:'250px'}}  >
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png" height="100"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Student Name</Card.Title>
                                    <Card.Text>Specialisation</Card.Text>
                                </Card.Body>
                            </Card>
          </div>
          <div>
          <Card   style={{marginTop:'20px',width:'250px'}}  >
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png" height="100"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Student Name</Card.Title>
                                    <Card.Text>Specialisation</Card.Text>
                                </Card.Body>
                            </Card>
          </div>
         
        </Slider>
                        <br/>
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default People;