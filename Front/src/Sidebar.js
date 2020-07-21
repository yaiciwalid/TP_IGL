// sidebar.js

import React from 'react';
import {slide as Menu } from 'react-burger-menu';
import ReactDOM from 'react-dom';
import './css/sidebar.css';
import {Link } from "react-router-dom";
/**@class composant pour afficher la bare de navigation de l'application

*/
class SideBar extends React.Component {

  render(){
  return (
    <Menu className="menu">
      <Link to="/home/Abs">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Saisir Absense</span>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Reserver Salle</span>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Envoyer Cours</span>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Parametre</span>
          </div>
        </div>
      </Link>

    </Menu>
  )
}
}

export default SideBar;
