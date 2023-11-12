import robeAvocat from "../images/robe_avocat.JPG";

export function PolitiqueTarifaire() {
  return (
    <>
      <div className="page">
        <div className="container-home">
          <h1 className="h1-second-size">Politique tarifaire</h1>
        </div>

        <div className="description-container">
          <div className="text-description">
            <p>
              Animé de la conviction que l’avocat, garant d’une défense de
              qualité, doit être accessible à tous, Maître Sylvain DUBRAY a
              développé une politique tarifaire qui permet à ses clients de
              limiter les risques financiers. Le premier rendez-vous leur permet
              d’évaluer l’opportunité d’une action judiciaire ainsi que leurs
              chances de succès.
            </p>
            <p>
              Lors de ce premier rendez-vous, il est vérifié auprès des sociétés
              d’assurance du client (habitation, véhicules, carte bleue…)
              l’existence d’une protection juridique susceptible de prendre en
              charge les honoraires de l’avocat.
            </p>
            <p>
              A défaut, si le client ne dispose pas de ressources suffisantes
              pour assumer les coûts de l’intervention de l’avocat, Maître
              Sylvain DUBRAY accepte de travailler à l’aide juridictionnelle
              totale ou partielle. Si l’aide juridictionnelle totale est
              accordée au client, l’intervention de l’avocat se fera sans aucun
              frais.
            </p>
            <p>
              Par ailleurs, Maître Sylvain DUBRAY est attaché à ce que ses
              clients connaissent précisément, pour chaque étape de la
              procédure, l’étendue de leur engagement financier.
            </p>
          </div>
          <div className="portrait-img">
            <img
              src={robeAvocat}
              alt="portrait de Maître Sylvain Dubray"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
