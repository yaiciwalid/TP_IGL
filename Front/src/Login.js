import React,{Component} from 'react';
import './css/Login.css';
//import { browserHistory } from 'react-router-dom';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { Link } from "react-router-dom";
import axios from 'axios';

var authen=false;
var profile="";
var is_adm=false;

/**@class composant pour gerer le login

*/

class Login extends Component {

	constructor(props){
		super(props);
		this.state={admin:false,ens:false,etu:false,link:"/",email:false,mdp:false};
		this.handleCheckClic=this.handleCheckClic.bind(this);
		this.handlelogClick=this.handlelogClick.bind(this);


	}

	/**
	* determine le type d'utilisateur voulant ce connecter
	* @param {boolean} adm vrai si l'utilisateur veut ce connecter en tant qu'administrateur.
	* @param {boolean} en vrai si l'utilisateur veut ce connecter en tant qu'enseignant.
	* @param {boolean} et vrai si l'utilisateur veut ce connecter en tant qu'etudiant.
	*/
	handleCheckClic(adm,en,et){
		this.setState({admin:adm,ens:en,etu:et});
		if(this.state.email&&this.state.mdp){
			console.log(document.getElementById("pwd").value);
			axios.get('http://127.0.0.1:8000/login/'+document.getElementById("mail").value+'/'+document.getElementById("pwd").value
	    ).then(res => {
	        console.log(res);
					if (res.data.profile!==null){
						if (this.state.admin&&res.data.is_admin) {
							this.setState({link:"/home/AjouterEtudiant"});
							is_adm=true;
							authen=true;
						}
						else if (this.state.ens){
							this.setState({link:"/home/Form"});
							authen=true;
						}
						else if(this.state.etu){
							authen=true;
							this.setState({link:"/home"});
						}
						else authen=false;
					}
					else authen=false;

	      }).catch(err=>{console.log(err);})

		}
	}
	/**
	* verifie que tout les champ sont remplit et fait une requete de connexion.
	*/
	handlelogClick(){
		document.getElementById("mail").value==="" ? this.setState({email:false}):this.setState({email:true});
		document.getElementById("pwd").value===""?this.setState({mdp:false}):this.setState({mdp:true});
		if(this.state.email&&this.state.mdp&&(this.state.admin||this.state.ens||this.state.etu)){
			if (this.state.admin) this.setState({link:"/home/AjouterEtudiant"});
			else if (this.state.ens) this.setState({link:"/home/Form"});
		}
		/*if(this.state.email&&this.state.mdp&&(this.state.admin||this.state.ens||this.state.etu)){
			axios.post(`http://127.0.0.1:8000/login`,{
				username: document.getElementById("mail").value,
				password:document.getElementById("pwd").value
				}).then(res => {
					console.log(res);
					if (this.state.admin) this.setState({link:"/home/AjouterEtudiant"});
					else if (this.state.ens) this.setState({link:"/home/Form"});
				})
		}*/

	}





	render(){

		return(
			<Form className="login-form">
				<h1 className="font-weight-bold text-center" id="esiH1">
					ESI SCOLARITE
				</h1>

				<h2 className="text-center" id="esiH2">Bienvenue</h2>
				<img id="cadenas"src="./cadenas.png" />
				<FormGroup>
					<Label>Email</Label>
					<Input type="email" placeholder="Email" id="mail" onChange={this.handlelogClick}/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input type="Password" id="pwd" placeholder="Password" onChange={this.handlelogClick}/>
				</FormGroup>
				<label class="container">Admin
				  <input type="radio"  name="radio" onChange={()=>this.handleCheckClic(true,false,false)}/>
				  <span class="checkmark"></span>
				</label>
				<label class="container">Enseignant
				  <input type="radio"  name="radio" onChange={()=>this.handleCheckClic(false,true,false)}/>
				  <span class="checkmark"></span>
				</label>
				<label class="container">etudiant
				  <input type="radio"  name="radio" onChange={()=>this.handleCheckClic(false,false,true)}/>
				  <span class="checkmark"></span>
				</label>
				<Link to={this.state.link}><Button className="btn-lg btn-danger btn-block mt-4 btn-custum" onClick={()=>this.props.onClick(document.getElementById("mail").value,authen,profile,is_adm)}>
					Log in </Button></Link>
				<div className="text-center">
					<a href="#" >Sign up</a>
					<span className="p-2">|</span>
					<a href="#">Forgot Password</a>
				</div>
			</Form>
		)
	}
}

export default Login;
