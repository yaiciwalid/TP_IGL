import React from 'react';
import './css/footer.css';
import ReactDOM from 'react-dom';

/**@class composant pour afficher le footer de l'application

*/
class Footer extends React.Component{

    render(){
    return(
  <div class="content">
      <div class="footer-grids">
        <div class="footer one">
          <h3>More About ESI-SCOLARITE</h3>
          <p> ESI SCOLARITE est une application de gestion de scolarité developpé par
          des etudiant de l'ecole nationale superieur d'informatique dans le but de faciliter
          la gestion des differentes taches en rapport avec la scolarité
          </p>
          <p class="adam">- ESI</p>
          <div class="clear"></div>
        </div>
        <div class="footer two">
          <h3>Keep Connected</h3>
          <ul>
            <li><a class="fb" href="#"><i></i>Like us on Facebook</a></li>
            <li><a class="fb1" href="#"><i></i>Follow us on Twitter</a></li>
            <li><a class="fb2" href="#"><i></i>Add us on Google Plus</a></li>
            <li><a class="fb3" href="#"><i></i>Follow us on Dribble</a></li>
            <li><a class="fb4" href="#"><i></i>Follow us on Pinterest</a></li>
          </ul>
        </div>
        <div class="footer three">
          <h3>Contact Information</h3>
          <ul>
            <li><span>ESI SCOLARITE</span>OUED-SMAR ALGER  </li>
            <li>1234567890  </li>
            <li><a href="mailto:info@example.com">contact@example.com</a> </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div class="copy-right-grids">
        <div class="copy-left">
            <p class="footer-gd">© 2016 Simple Footer Widget. All Rights Reserved | Design by</p>
        </div>
        <div class="copy-right">
          <ul>
            <li><a href="#">ESI Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>)}
}

export default Footer;
