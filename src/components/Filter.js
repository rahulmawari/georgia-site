import React, {Component} from 'react';
import {Dropdown} from 'react-bootstrap';

class Filter extends Component{
    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item> Value 1 </Dropdown.Item>
                    <Dropdown.Item> Value 2 </Dropdown.Item>
                    <Dropdown.Item> Value 3 </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default Filter;