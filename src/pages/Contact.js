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

    // Add your EmailJS logic here
    if (capVal) {
      // Your form submission logic
    } else {
      alert("Please complete the reCAPTCHA challenge.");
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
            <span
              className={`success ${success ? "visible success" : "hidden"}`}
            >
              Votre message a bien été envoyé, <br />
              nous essaierons de vous répondre dans les plus brefs délais !
            </span>
            <div className="container-input">
              <label htmlFor="recaptcha">reCAPTCHA: </label>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
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
