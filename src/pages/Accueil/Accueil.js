import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faScaleBalanced,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import portraitPhoto from "../../images/portrait.jpg";

import "./Accueil.css";

export function Accueil() {
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="title-container">
            <h1>Sylvain Dubray</h1>
            <h2>Avocat - Lyon</h2>
          </div>

          <div className="description-container">
            <div className="text-description">
              <p>
                L’avocat est un professionnel du droit qui a vocation à
                conseiller ou défendre les personnes dans les difficultés
                juridiques ou administratives qu’elles rencontrent
                quotidiennement.
              </p>
              <p>
                Il exerce ainsi « une fonction sociale qui est de prévenir et
                d’éviter les conflits, de veiller à les résoudre conformément au
                droit, pour favoriser l’évolution du droit et défendre la
                liberté, la justice et l’état de droit » (Cour européenne des
                droits de l’homme, arrêt du 23 avril 2015, n° 142-2015).
              </p>
              <p>
                Avocat depuis le 25 janvier 2005, Maître Sylvain DUBRAY
                intervient principalement en droit du travail (litiges avec
                l’employeur, harcèlement moral, licenciement, travail dissimulé,
                heures supplémentaires non payées, négociation, rupture
                conventionnelle…).
              </p>
              <p>
                Structure à taille humaine, son cabinet s’engage à offrir à ses
                clients un service de qualité fondé sur la réactivité, la clarté
                et l’efficacité.
              </p>
            </div>

            <div className="portrait-img">
              <img
                src={portraitPhoto}
                alt="portrait de Maître Sylvain Dubray"
              />
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Réactivité</h3>
            <FontAwesomeIcon
              className="icon-medium icon-brown-clear"
              icon={faHandshake}
            />
          </div>
          <div className="card-text">
            <p>
              Convaincu que la solution d’un litige passe avant tout par une
              réflexion stratégique, Maître Sylvain DUBRAY met immédiatement ses
              compétences, son expérience et son savoir-faire au service de ses
              clients afin de définir et de hiérarchiser avec eux les objectifs
              à atteindre.
            </p>
            <p>
              Souhaitant bâtir avec ses clients une relation basée sur la
              confiance et la proximité, il reste toujours disponible pour
              répondre à leurs interrogations légitimes sur l’avancement de leur
              dossier.
            </p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Clarté</h3>
            <FontAwesomeIcon
              className="icon-medium icon-brown"
              icon={faScaleBalanced}
            />
          </div>
          <div className="card-text">
            <p>
              Maître Sylvain DUBRAY explique ainsi à ses clients avec la plus
              grande clarté le fonctionnement de la procédure et des règles de
              droit applicables à leur situation.
            </p>
            <p>
              En retour, il est à l’écoute des difficultés (situations de
              harcèlement moral, burn out…) et des motivations de ses clients,
              qui guident son action au quotidien.
            </p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Efficacité</h3>
            <FontAwesomeIcon className="icon-medium icon-red" icon={faGavel} />
          </div>
          <div className="card-text">
            <p>
              Afin d’accélérer la résolution des litiges, Maître Sylvain DUBRAY
              rédige, lance ou introduit sans délai les actes, procédures et
              recours dont l’exercice lui est confié.
            </p>
            <p>
              Pour réduire l’anxiété inhérente aux procès qui durent et parfois
              même s’éternisent, il recherche avec ses clients la solution, même
              extrajudiciaire (transaction, médiation…), qui leur garantit le
              meilleur rapport temps/résultat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
