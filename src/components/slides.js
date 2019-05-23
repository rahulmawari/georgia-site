import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class Slides extends Component{
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 h-25" src="https://cdn-images-1.medium.com/max/1400/1*5N_SZkD-Po-L-JDW0Vz-DA.jpeg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-50" src="https://www.eurekalert.org/multimedia/pub/web/114754_web.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-50" src="https://pbs.twimg.com/media/C-L3s8fXcAAmwRd.jpg" />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slides;