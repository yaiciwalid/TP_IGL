import React from 'react';
import ReactDOM from 'react-dom';
import {User} from './user.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/buttonsub.css';


export default class Square extends React.Component {
	constructor(props){
		super(props);
		this.handlePresenceClick=this.handlePresenceClick.bind(this)
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
								Present
							</div>
							<div class="cell">
								Absent
							</div>
						</div>
				      {this.props?eleves.map((user,index) => (
				        <User us={user} key={index} onClick={this.handlePresenceClick} />
				      ))}
					</div>
					<Link to="/angular"><div class="button_cont" align="center">
					<a class="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">
					Envoyer Liste</a></div></Link>
				</div>
			</div>
		</div>

	  )
	}

	handlePresenceClick(user,bool){

		users[users.indexOf(user)].absent=bool;
		this.setState({});

	}



}
