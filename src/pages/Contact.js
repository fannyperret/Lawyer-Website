import { useMemo, useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCqzOa7PXbIfTcxbmEeGf3ykCRxHahddZs",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className="main">
        <div className="container-home">
          <h1 className="h1-second-size">Contact</h1>
        </div>

        <div className="container-contact">
          <form>
            <div className="container-input">
              <label htmlFor="name">Votre nom et prénom : </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="container-input">
              <label htmlFor="email">Votre email : </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="container-input">
              <label htmlFor="message">Votre message : </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                cols="40"
              ></textarea>
            </div>
            <button>
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
