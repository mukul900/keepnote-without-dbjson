import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
            <Navbar.Text>keepnote@2021</Navbar.Text>
          </Navbar>
        )
    }
};
export default Footer