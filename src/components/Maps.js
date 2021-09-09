import GoogleMapReact from "google-map-react";
import { useContext, useState, useEffect } from "react";
import { ActiveContext } from "./data/ActiveContext";
import { MarkerMap } from "./MarkerMap";
import axios from "axios";

export default function Maps(props) {
  const { cto } = useContext(ActiveContext);
  const [data, setData] = useState([]);

  const newCto = async (lat, lng) => {
    let dalist = {
      name: "CTO 02",
      marca: "filco",
      capacidade: 16,
      lat: lat,
      lng: lng,
      type: cto,
      color: "black",
      status: "true",
    };
    await axios.post(`http://localhost:4000/marker`, dalist);
    dataMarker();
  };
  console.log(data);
  const dataMarker = async () => {
    let marker = await axios.get(`http://localhost:4000/marker`);

    setData(marker.data);
  };
  useEffect(() => {
    dataMarker();
  }, []);
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
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(e) => newCto(e.lat, e.lng)}
      >
        {data?.map((d) => (
          <MarkerMap lat={d.lat} lng={d.lng} key={d.id} cto={cto} data={d} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
