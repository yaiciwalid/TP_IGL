import React from 'react';
import ReactDOM from 'react-dom';
import {Etudiant} from './etudiant.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/buttonsub.css';

/**@class

*/

/**
* composant pour afficher la liste des etudants d'un groupe.
* @prop {etudiant[]} eleves tableau de composants representant les etudiants d'un groupe.
*/
class ListeEtudiant extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
	  return (
	  	<div class="limiter">
			<div class="container-table100">
				<div class="wrap-table100">
					<div class="table">
				    	<div class="row header">
							<div class="cell">
								Matricule
							</div>
							<div class="cell">
								Nom
							</div>
							<div class="cell">
								Prenom
							</div>
							<div class="cell">
								E-mail
							</div>
						</div>
				      {this.props.eleves.map((user,index) => (
				        <Etudiant us={user} key={index}  />
				      ))}
					</div>
					<Link to="/home/AjouterEtudiant"><div class="button_cont" align="center">
					<a class="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">
					Ajouter Etudiant</a></div></Link>
				</div>
			</div>
		</div>

	  )
	}



}
export default ListeEtudiant;
