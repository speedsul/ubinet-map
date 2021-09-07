import GoogleMapReact from "google-map-react";
import { MarkerMap } from "./MarkerMap";

export default function Maps(props) {
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
        onClick={(e) => console.log(e)}
      >
        <MarkerMap lat={-29.589622} lng={-50.808668} />
        <MarkerMap lat={-29.591898403622153} lng={-50.809097153442394} />
        <MarkerMap lat={-29.596227160610262} lng={-50.805578095214855} />
      </GoogleMapReact>
    </div>
  );
}
