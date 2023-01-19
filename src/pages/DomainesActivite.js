import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

export function DomainesActivite() {
  return (
    <>
      <div className="main">
        <div className="container-home">
          <h1 className="h1-second-size">
            Domaine d'intervention
            <br /> en droit du travail
          </h1>
        </div>

        <div className="card-group">
          <div className="card">
            <h3>Droit du travail</h3>
            <FontAwesomeIcon className="icon-medium icon-red"  icon={faHandshake} />
          </div>
          <div className="card">
            <h3>Santé au travail</h3>
            <FontAwesomeIcon className="icon-medium icon-brown"  icon={faHandshake} />
          </div>
          <div className="card">
            <h3>Salaires</h3>
            <FontAwesomeIcon className="icon-medium icon-grey"  icon={faHandshake} />
          </div>
        </div>

        <div>
          <p>
            – Inexécution, exécution fautive ou déloyale des promesses
            d’embauche et des contrats de travail, (CDI, CDD ou CTT), situations
            de travail dissimulé, défaut de fourniture du travail convenu
          </p>
          <p>
            – Demande de congés, maternité, paternité, sabbatique, proche aidant
            …
          </p>
          <p>
            – Demande de paiement de salaires, primes, indemnités de
            congés-payés, indemnités en espèce sanctionnant le défaut de
            contrepartie obligatoire en repos…
          </p>
          <p>
            – Négociation et transaction (proposition de règlement amiable ,
            mise en demeure, avenant au contrat, rupture conventionnelle,
            rupture anticipée de CDD, rupture amiable)
          </p>
          <p>– Demande de résiliation judiciaire du contrat de travail</p>
          <p>
            – Demande de requalification de démission ou prise d’acte de la
            rupture du contrat de travail en licenciement nul ou abusif
          </p>
          <p>– Demande de requalification de CDD en CDI</p>
          <p>– Demande de requalification de temps partiel en temps complet</p>
          <p>
            – Durée du travail (dépassement des durées maximales de travail,
            absence ou insuffisance des pauses et repos obligatoires)
          </p>
          <p>
            – Invalidation/annulation des forfaits-jours pour les cadres et les
            autres salariés autonomes
          </p>
          <p>
            – Demande de paiement des heures supplémentaires ou complémentaires
            et des indemnités pour travail dissimulé afférentes
          </p>
          <p>
            – Problématiques de santé au travail (manquement de l’employeur à
            son obligation de sécurité, courriers d’alerte, exercice du droit de
            retrait, harcèlement moral, accident du travail, maladie
            professionnelle, faute inexcusable de l’employeur)
          </p>
          <p>– Contestation des avis de la médecine du travail</p>
          <p>
            – Contestation des licenciements pour inaptitude professionnelle ou
            non professionnelle
          </p>
          <p>
            – Contestation des sanctions disciplinaires (avertissement, blâme,
            mise à pied, licenciement pour motif personnel, faute simple, faute
            grave ou faute lourde)
          </p>
          <p>
            – Contestation des autres licenciements pour motifs personnels
            (insuffisance professionnelle, perte de confiance, incompatibilité
            d’humeur, insuffisance de résultat, absences répétées entraînant une
            désorganisation de l’entreprise…)
          </p>
          <p>
            – Contestation des modifications de contrat et licenciements pour
            motifs économiques (absence de motif économique suffisant, violation
            de l’obligation de reclassement, convention de sécurisation
            professionnelle)
          </p>
        </div>
      </div>
    </>
  );
}
