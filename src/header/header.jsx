import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>Brand link</Navbar.Brand>
          </Navbar>
        )
    }
};
export default Header