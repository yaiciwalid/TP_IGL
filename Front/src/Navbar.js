
import React from 'react';
import {Navbar,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap";
import ReactDOM from 'react-dom';
import './css/nav.css';
import Login from './Login.js';
/**@class composant pour afficher la bare de navigation de l'application

*/
class Navb extends React.Component {

	render(){
  return (
    <Navbar bg="light" expand="lg">
	  	<Navbar.Brand href="#home" id="premier">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  	&nbsp;ESI-SCOLARITE</Navbar.Brand>
	  	<Navbar.Toggle aria-controls="basic-navbar-nav" />
	  	<Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="#home" onClick={()=>console.log(this.props.id)}>Home</Nav.Link>
		      <Nav.Link href="#link">Link</Nav.Link>
		      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		    </Nav>
		    <Form inline>
				<Link to={"/"}><Button className="but" >
					Deconnexion </Button></Link>
					<img src="../user.png" /><span  id="id-texte">{this.props.id}</span>
		    </Form>
  		</Navbar.Collapse>
	</Navbar>


  )}


}
export default Navb;
