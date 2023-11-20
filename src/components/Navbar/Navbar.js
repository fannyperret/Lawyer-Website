import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Accueil } from "../../pages/Accueil/Accueil";
import { DomainesActivite } from "../../pages/DomainesActivite";
import { PolitiqueTarifaire } from "../../pages/PolitiqueTarifaire";
import { Contact } from "../../pages/Contact";
import { MentionsLegales } from "../../pages/MentionsLegales";
import { Page404 } from "../../pages/Page404";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logo.png";
import "./Navbar.css";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav>
        <ul>
          <li className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo Sylvain Dubray Avocat"></img>
            </NavLink>
          </li>
          <div className="container-nav">
            <li className="hover-nav">
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className="hover-nav">
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to="/domainesactivite"
              >
                Domaines d'activité
              </NavLink>
            </li>
            <li className="hover-nav">
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to="/politiquetarifaire"
              >
                Politique tarifaire
              </NavLink>
            </li>
            <li className="contact">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/domainesactivite" element={<DomainesActivite />} />
        <Route path="/politiquetarifaire" element={<PolitiqueTarifaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
      </Routes>
    </>
  );
}
