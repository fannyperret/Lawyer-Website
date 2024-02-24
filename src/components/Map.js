import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const CustomMarker = ({ isActive, data, map }) => {
  const position = [45.75826, 4.8767];
  const [refReady, setRefReady] = useState(false);
  let popupRef = useRef();

  useEffect(() => {
    if (refReady && isActive) {
      map.openPopup(popupRef);
    }
  }, [isActive, refReady, map]);

  return (
    <Marker position={position}>
      <Popup
        ref={(r) => {
          popupRef = r;
          setRefReady(true);
        }}
      >
        <span>{data.title}</span>
        <br />
        <span>{data.address}</span>
        <br />
        <span>{data.city}</span>
      </Popup>
    </Marker>
  );
};

const Map = () => {
  const position = [45.75826, 4.8767];

  const [map, setMap] = useState(null);

  return (
    <MapContainer
      ref={setMap}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%", maxWidth: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CustomMarker
        isActive
        map={map}
        data={{
          position: [45.34416, 15.49005],
          title: "Sylvain Dubray Avocat",
          address: "1 ter Rue Frédéric Mistral,",
          city: "69100 Villeurbanne",
        }}
      />
    </MapContainer>
  );
};

export default Map;
