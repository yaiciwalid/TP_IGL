import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './vendor/animate/animate.css';
import './vendor/select2/select2.min.css';
import './vendor/perfect-scrollbar/perfect-scrollbar.css';
import './css/util.css';
import './css/main.css';

/**@class

*/
/**
* composant pour afficher une ligne du tableau de saisie d'absences.
* @prop {string} matricule le matricule de l'etudiant.
* @prop {string} nom nom de l'etudiant.
* @prop {string} prenom prenom de l'etudiant.
* @prop {boolean} absent si l'etuidiant est present ou absent.
*/
class User extends React.Component{
	render(){
		return (
		<div class="row">
				<div class="cell" data-title="Matricule" with={25} height = {30}>
				{this.props.us.matricule}
				</div>
				<div class="cell" data-title="Nom">
					{this.props.us.nom}
				</div>
				<div class="cell" data-title="Prenom">
					{this.props.us.prenom}
				</div>
				<div class="cell" data-title="Present" onClick={()=>this.props.onClick(this.props.us,false)}>
					{this.props.us.absent||this.props.us.absent===null ?'' :<img src="present.png"/> }
				</div>
				<div class="cell" data-title="Absent" onClick={()=>this.props.onClick(this.props.us,true)} >
					{this.props.us.absent ? <img src="absent.png" />: ''}
				</div>
	    </div>
	    )
	}
}

export {User}
