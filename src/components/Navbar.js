import { Routes, Route, NavLink } from "react-router-dom";
import { Accueil } from "../pages/Accueil";
import { DomainesActivite } from "../pages/DomainesActivite";
import { PolitiqueTarifaire } from "../pages/PolitiqueTarifaire";
import { Contact } from "../pages/Contact";
import { Page404 } from "../pages/Page404";

export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/domainesactivite"
            >
              Domaines d'activité
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/politiquetarifaire"
            >
              Politique tarifaire
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/domainesactivite" element={<DomainesActivite />} />
        <Route path="/politiquetarifaire" element={<PolitiqueTarifaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
