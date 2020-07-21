import React from 'react';
import './css/Formabs.css';
import {Button,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { Link} from "react-router-dom";


/**@class

*/

/**
* composant pour afficher un formulaire pour ajouter un etudiant a un groupe.
* @prop {string} nom nom de l'etudiant
* @prop {string} prenom prenom de l'etudiant.
* @prop {string} matricule matricule de l'etudiant.
* @prop {string} groupe groupe de l'etudiant.
* @prop {link} lien vers le quelle sera rediriger l'administrateur une fois le formulaire remplit.
*/
class FormAjout extends React.Component{

	constructor(props){
		super(props);
		this.state={nom:false,Prenom:false,mat:false,group:false,link:"/home/AjouterEtudiant"};
		this.clicked=this.clicked.bind(this);

	}
	/**
	* appelé si on un des champ du formulaire est remplit afin de mettre a jour les states du composant et verifier
	que tous les champs ont été remplit avant de faire une requete

	*/
	clicked(){
		console.log(this.state.nom);
		document.getElementById("nom").value===""?this.setState({nom:false}):this.setState({nom:true});
		document.getElementById("prenom").value===""?this.setState({Prenom:false}):this.setState({Prenom:true});
		document.getElementById("matricule").value===""?this.setState({mat:false}):this.setState({mat:true});
		document.getElementById("groupe").value===""?this.setState({group:false}):this.setState({group:true});
		if(this.state.nom&&this.state.Prenom&&this.state.mat&&this.state.group) this.setState({link:"/home/Listetudiant"});
		else this.setState({link:"/home/AjouterEtudiant"});
		this.setState({});

	}
	render(){
		return (
			<form className="Abs-form">
				<img id="Logo_esi"src="../ESI_Logo.png" />
				<h1 className="font-weight-bold text-center" id="formabs-title">
					Formulaire d'ajout d'un etudiant a un groupe
				</h1>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Nom Etudiant</Label>
		          <Input type="texte" placeholder="Nom" id="nom" onChange={this.clicked}></Input>
		    </FormGroup>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Prenom Etudiant</Label>
		          <Input type="texte" placeholder="Prenom" id="prenom" onChange={this.clicked}></Input>
		    </FormGroup>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Matricule Etudiant</Label>
		          <Input type="number"placeholder="Matricule"  id="matricule" onChange={this.clicked}></Input>
		    </FormGroup>
		    <FormGroup>
		          <Label for="exampleSelect" className="font-weight-bold">Groupe</Label>
		          <Input type="select" name="select" id="groupe" onChange={this.clicked}>
							{this.props.groupes.map((groupe) => (
								<option>{groupe}</option>
							))}
		          </Input>
		    </FormGroup>
				<Link to={this.state.link}><Button className="btn-lg btn-danger btn-block mt-4 btn-custum"
				onClick={()=>this.props.onClick(document.getElementById("groupe").value,document.getElementById("matricule").value,
			document.getElementById("nom").value,document.getElementById("prenom").value)}>
					Soumettre </Button></Link>
			</form>
	    )
	}
}

export default FormAjout;
