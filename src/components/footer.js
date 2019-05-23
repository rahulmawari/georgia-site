import React, {Component} from 'react';
import logo from '../images/GeorgiaTechLogo-RGB-Gray.png';

class Footer extends Component{
    render(){
        return (
            <footer id="footer">
                <div id="footer-logo">
                <a href="http://www.gatech.edu/">
                <img alt="Georgia Tech" width="140" height="50" src={logo} />
                </a>
                <p id="inst">&copy; Georgia Institute of Technology</p>
                </div>
                <div id="footer-links">
                <br></br>
                <p id="links">Emergency Information : Legal & Privacy Information : Accessibility : Accountability : Accreditation : Employment</p>    
                </div>
            </footer>
        );
    }
}

export default Footer;