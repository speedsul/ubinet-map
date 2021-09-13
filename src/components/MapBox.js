import { useState } from "react";
import MapGL from "react-map-gl";
import MarkerMapBox from "./mapBox/MarkerMapbox";

export default function MapBox() {
  const [style, setStyle] = useState("mapbox://styles/mapbox/satellite-v9");
  const [viewport, setViewport] = useState({
    latitude: -29.589622,
    longitude: -50.808668,
    zoom: 15.5,
  });

  //https://docs.mapbox.com/api/maps/styles/

  return (
    <div className="flex w-full h-screen">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
        mapStyle={style}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <MarkerMapBox />
      </MapGL>
    </div>
  );
}
