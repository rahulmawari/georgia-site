import React, {Component} from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import Slides from './slides';

class About extends Component{
    render(){
        return (
            <Jumbotron>
                <Row>
                <Col>
                <Slides />
                </Col>
                <Col>
                <h1>About Georgia Tech’s Financial Services Innovation Lab</h1><br/><br/>
                    <p>
                    Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. 
                    The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. 
                    The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs. 
                    Through an ecosystem of affiliates, faculty, student, and practitioner interaction, the lab creates original research and insights that are relevant for financial markets and institutions by focusing on the technology and innovation disrupting the financial services industry. 
                    The lab facilitates experiential learning projects to positively influence student learning experiences. 
                    The lab also organizes events to inform research, classroom learning, entrepreneurship and corporate best practices.
                    </p>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default About;