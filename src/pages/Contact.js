import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Map from "../components/Map";
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [capVal, setCapVal] = useState(null);

  const handleRecaptchaChange = (value) => {
    setCapVal(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (capVal) {
      // Your form submission logic
    } else {
      alert("Veuillez valider le formulaire captcha.");
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        "service_98d5ywd",
        "template_4b2j799",
        templateParams,
        "CJsAYky93OblqEC5F"
      )
      .then((response) => {
        console.log("Email envoyé avec succès : ", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi : ", error);
      });
  };

  return (
    <>
      <div className="page">
        <div className="container-home">
          <h1>Contact</h1>
        </div>

        <div className="container-contact">
          <form onSubmit={handleSubmit}>
            <div className="container-input">
              <label htmlFor="name">Nom et prénom : </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="container-input">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="container-input">
              <label htmlFor="message">Message : </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                cols="40"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <span
              className={`success ${success ? "visible success" : "hidden"}`}
            >
              Votre message a bien été envoyé, <br />
              nous essaierons de vous répondre dans les plus brefs délais !
            </span>
            <div className="container-input">
              <label htmlFor="recaptcha">
                Veuillez cocher la case ci-dessous pour continuer :{" "}
              </label>
              <ReCAPTCHA
                sitekey="6LcIC34pAAAAACQTuVWlgOnBuyOdCuPose4tNuRS"
                onChange={handleRecaptchaChange}
              />
            </div>
            <button className="button" disabled={!capVal}>
              <FontAwesomeIcon
                className="icon-small icon-white"
                icon={faPaperPlane}
              />
              Envoyer
            </button>
          </form>
          <Map />
        </div>
      </div>
    </>
  );
}
