// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from './Sidebar';
import Square from './Listeabs.js';
import './css/App.css';
import Footer from './footer.js';
import Navb from './Navbar.js';
import Login from './Login.js';
import Formabs from './Formabs.js';
import FormAjout from './Formajout.js';
import ListeEtudiant from './ListeEtudiant.js'
import axios from 'axios';
import {Redirect} from 'react-router';

var lien;
var group=[];
var modul=[];
var eleves=[];
var emai="";
 /**@class la classe principale pour gerer les differents composants*/
class App extends React.Component {

	constructor(props) {
    super(props)
		this.state={email:""}
    this.handleFormabsClick= this.handleFormabsClick.bind(this)
		this.handleFormajoutClick= this.handleFormajoutClick.bind(this)
		this.handleLoginClick= this.handleLoginClick.bind(this)


  }

	render(){
  return (

    <div id="App">
      <Route path="/" exact render={()=>(<Login onClick={this.handleLoginClick} link={lien}/>)}/>
      <Route path="/home" render={() => (<Navb id={this.state.email} />)} />
      <Route path="/home" component={SideBar} />
      <div id="page-wrap">
        <Route path="/home/Form" render={() => (<Formabs  modules={modul} groupes={group} onClick={this.handleFormabsClick}/>)}/>
        <Route path="/home/Abs" render={() => (<Square eleves={eleves} />)}/>
				<Route path="/home/AjouterEtudiant" render={() => (<FormAjout groupes={group} onClick={this.handleFormajoutClick}/>)}/>
				<Route path="/home/Listetudiant" render={() => (<ListeEtudiant eleves={eleves} />)}/>
      </div>
      <Footer/>
    </div>


  )}
	/**
	* appelé si le login c'est fait avec succes et transmet l'email dans le state de l'app
	* @param {string} em email du compte connecté.
	* @param{boolean} authen booleen pour indiquer que l'authentification c'est faite correctement ou non
	* @param{object[]} profile contient le profile de l'utilisateur connecté
	* @param{boolean} adm booleen pour indiqer si le compte est administrateur
	*/
  handleLoginClick(em,authen,profile,adm){
		if(authen){
			emai=em;
			if(adm){
				axios.get(`http://127.0.0.1:7000/groupes_list/`)
					.then(res => {
							group=res.data;
							this.setState({});
		      })
			}else{
				axios.get(`http://127.0.0.1:8000`+profile)
					.then(res => {
						if(res.data.Group1!==""){
							group[0]=res.data.Group1;
							if(res.data.Group2!==""){
								group[1]=res.data.Group2;
								if(res.data.Group3!==""){
									group[2]=res.data.Group3;
									if(res.data.Group4!=="")group[3]=res.data.Group4;
								}
							}
						}
						if(res.data.Module1!==""){
							modul[0]=res.data.Module1;
							if(res.data.Module2!==""){
								modul[1]=res.data.Module2;
								if(res.data.Module3!=="") modul[2]=res.data.Module3;
							}

						}
						this.setState({});

		      })
			}

		}

  }
	/**
	* lance   une requete pour afficher la liste des etudiants d'un meme groupe
	* @param {string} grp le groupe de l'etudiant a ajouter.

	*/

	handleFormabsClick(grp){
		axios.get(`http://127.0.0.1:7000/group/`+grp)
			.then(res => {
        eleves=res.data;
				this.setState({});

      })
			console.log(emai);
	}

	/**
             * lance une requete d'ajout d'un etudiant a un groupe puis une requete pour afficher la liste des etudiants du meme groupe
             * @param {string} grp le groupe de l'etudiant a ajouter.
             * @param {string}  mat matricule de l'etudiant.
             * @param {string} name nom de l'etudiant.
						 *@param {string} pre prenom de l'etudiant.
             */
	handleFormajoutClick(grp,mat,name,pre){
		var email=pre[0]+'_'+name+"@esi.dz";
		axios.post('http://127.0.0.1:7000/etudiant/', {
    matricule: mat,
    nom: name,
    prenom: pre,
    email: email,
    groupe: grp
  })
  .then(response=>{
		axios.get(`http://127.0.0.1:7000/group/`+grp)
			.then(res => {
        eleves=res.data;
				this.setState({});

      })
  })

	}


}
export default App;
