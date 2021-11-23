import React, { Component } from 'react'; 
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {

    render() {
        return(
            <div className="App">
                <Navbar className="jumbotron" dark color="success">
                <div className="container">
                    <NavbarBrand href="/">DME Order Form</NavbarBrand>
                </div>
                </Navbar>
            </div>
        );
    }
}

export default Header; 
