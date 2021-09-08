import GoogleMapReact from "google-map-react";
import { useContext, useState } from "react";
import { ActiveContext } from "./data/ActiveContext";
import { MarkerMap } from "./MarkerMap";

export default function Maps(props) {
  const { cto } = useContext(ActiveContext);
  const [data, setData] = useState([]);
  console.log(data);
  const defaultProps = {
    center: {
      lat: -29.589622,
      lng: -50.808668,
    },
    defaultMapTypeId: "satellite",
    options: {
      mapTypeId: "SATELLITE",
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJL1ThvqqsnBpZtJljsXnQixYc2QA5SJU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(e) => setData({ lat: e.lat, log: e.lng, type: cto, ...data })}
      >
        <MarkerMap lat={data.lat} lng={data.log} />
      </GoogleMapReact>
    </div>
  );
}
