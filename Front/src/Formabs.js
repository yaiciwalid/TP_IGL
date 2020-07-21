import React from 'react';
import './css/Formabs.css';
import {Button,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {Link} from "react-router-dom";


/**@class

*/

/**
* composant pour afficher un formulaire pour la saisie d'absence
* @prop {string} module module ou on veut saisir les absences.
* @prop {string} groupe groupe ou on veut saisir les absences.
* @prop {string} date date de la saisie d'absence.
* @prop {string} time l'heure de la saisie d'absence.
* @prop {link} lien vers le quelle sera rediriger l'enseignant une fois le formulaire remplit.
*/
class Formabs extends React.Component{
	constructor(props){
		super(props);
		this.state={nommod:false,date:false,time:false,group:false,link:"/home/Form"};
		this.clicked=this.clicked.bind(this);

	}
	/**
	* appelé si on un des champ du formulaire est remplit afin de mettre a jour les states du composant et verifier
	que tous les champs ont été remplit avant de faire une requete

	*/
	clicked(){
		console.log(document.getElementById("time").value);
		document.getElementById("nommod").value===""?this.setState({nommod:false}):this.setState({nommod:true});
		document.getElementById("group").value===""?this.setState({group:false}):this.setState({group:true});
		document.getElementById("date").value===""?this.setState({date:false}):this.setState({date:true});
		document.getElementById("time").value===""?this.setState({time:false}):this.setState({time:true});
		if(this.state.nommod&&this.state.group&&this.state.date&&this.state.time) this.setState({link:"/home/Abs"});
		else this.setState({link:"/home/Form"});
		this.setState({});

	}

	render(){
		return (
			<form className="Abs-form">
				<img id="Logo_esi"src="../ESI_Logo.png" />
				<h1 className="font-weight-bold text-center" id="formabs-title">
					Formulaire de saisie des absences
				</h1>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Nom du Module</Label>
		          <Input type="select" name="select" id="nommod" onChange={this.clicked}>
		          	{this.props.modules.map((module) =>(
				        <option>{module}</option>
				      ))}
		          </Input>
		        </FormGroup>
		        <FormGroup>
		          <Label for="exampleSelect" className="font-weight-bold">Groupe</Label>
		          <Input type="select" name="select" id="group" onChange={this.clicked} >
							{this.props.groupes.map((groupe) => (
				       	<option>{groupe}</option>
				      ))}
		          </Input>
		        </FormGroup>

				<FormGroup id="tes">
		          <Label for="exampleDate" className="font-weight-bold">Date</Label>
		          <Input type="date" name="date" id="date" placeholder="date placeholder" onChange={this.clicked} />
		        </FormGroup>
		        <FormGroup>
		          <Label for="exampleTime"  className="font-weight-bold">Time</Label>
		          <Input type="time" name="time" id="time" placeholder="time placeholder" onChange={this.clicked}/>
		        </FormGroup>
				<Link to={this.state.link}><Button className="btn-lg btn-danger btn-block mt-4 btn-custum"
				onClick={()=>this.props.onClick(document.getElementById('group').value)}>
					Soumettre </Button></Link>
			</form>
	    )
	}
}

export default Formabs;
