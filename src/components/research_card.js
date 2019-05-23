import React, {Component} from 'react';
import {Card, CardDeck, Container,Carousel} from 'react-bootstrap';
import Paper from './Research_Paper';
import Slider from "react-slick";


import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
class ResearchCard extends Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:2,
            slidesToScroll: 2
          };
        return(
            <Container>

            <Slider {...settings}>
        <div    >
        <Card    style={{marginLeft:'40%',marginTop:'20px',height:'100%',width:'50%'}}>
                <Card.Img variant="top" height='200px' src="https://media3.giphy.com/media/rM0wxzvwsv5g4/giphy.gif?cid=3640f6095c720a054e597568490ff9bb" />
                <Card.Body>
                    <Card.Title>Financial Markets</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

             
        </div>
        <div>
        <Card    style={{marginLeft:'10%',marginTop:'20px',height:'100%',width:'50%'}}>
                <Card.Img variant="top"      height='200px' src="http://www.hosseinilaw.com/wp-content/uploads/2012/10/finance.jpg" />
                <Card.Body>
                <Card.Title>Banking and Financial Institutions</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>
        </div>
        <div>
        <Card    style={{marginLeft:'40%',marginTop:'20px',height:'100%',width:'50%'}}>
                <Card.Img variant="top"  height='200px' src="https://media3.giphy.com/media/dfEYhn5LpEezu/giphy.gif?cid=3640f6095c720a0d6b706f4c55933402" />
                <Card.Body>
                <Card.Title>Cyber Security and Risk Management</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>
        </div>
        <div>
        <Card   style={{marginLeft:'10%',marginTop:'20px',height:'100px',width:'50%'}}>
                <Card.Img variant="top"  height='200px' src="https://media1.giphy.com/media/4JUcEz7I1EZl0toepN/200w.webp?cid=3640f6095c722f0a44714879325740d9" />
                <Card.Body>
                <Card.Title>Block chain, Smart Contracts and Crypto Currencies</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

        </div>
       
      </Slider>
            </Container>
        );
    }
}

export default ResearchCard;