import { NavLink } from "react-router-dom";

import logoBarreauAvocat from "../../images/logo_barreau_avocats.png";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-div">
            <p>© Sylvain Dubray</p>
            <p>
              <NavLink to="/mentionslegales">Mentions légales</NavLink>
            </p>
            <p>Intégration web : Fanny Perret</p>
          </div>
          <div className="footer-div">
            <p>Sylvain Dubray</p>
            <p>Avocat au barreau de Lyon</p>
            <p>1 ter rue Frédéric Mistral - 69100 Villeurbanne</p>
            <p>Toque n°2246</p>
          </div>
          <div className="footer-div">
            <p>tél : 09 54 13 53 59 - fax : 09 57 75 57 67</p>
            <p>contact@sylvaindubrayavocat.com</p>
            <p>Siren : 480 768 795</p>
            <p>TVA intracommunautaire : FR11480768795</p>
          </div>
          <div className="footer-div">
            <img
              className="footer-img"
              src={logoBarreauAvocat}
              alt="logo avocat barreau"
            ></img>
          </div>
        </div>
      </footer>
    </>
  );
}
