import { useState, useMemo, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCqzOa7PXbIfTcxbmEeGf3ykCRxHahddZs",
  });
  if (!isLoaded) return <div>Loading...</div>;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Use your EmailJS template ID and user ID
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
        console.log("Email send successfully:", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="page">
        <div className="container-home">
          <h1 className="h1-second-size">Contact</h1>
        </div>

        <div className="container-contact">
          <form onSubmit={handleSubmit}>
            <div className="container-input">
              <label htmlFor="name">Votre nom et prénom : </label>
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
              <label htmlFor="email">Votre email : </label>
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
              <label htmlFor="message">Votre message : </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                cols="40"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <span className={`success ${success ? "visible success" : "hidden"}`}>Votre message a bien été envoyé, <br/>nous essaierons de vous répondre dans les plus brefs délais !</span>
            <button className="button">
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

function Map() {
  const center = useMemo(
    () => ({ lat: 45.758412127421145, lng: 4.876757473011187 }),
    []
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        {isMounted && (
          <Marker position={center}>
            <InfoWindow
              position={{ lat: 45.75966965220212, lng: 4.876671642329604 }}
              state={true}
            >
              <div className="map-info-window">
                <h4>Sylvain Dubray</h4>
                <p>1 ter rue Frédéric Mistral</p>
                <p>69100 Villeurbanne</p>
                <p>Toque n°2246</p>
              </div>
            </InfoWindow>
          </Marker>
        )}
      </GoogleMap>
    </>
  );
}
