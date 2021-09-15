import { useState, useContext, useEffect } from "react";

import MapGL from "react-map-gl";
import MarkerMapBox from "./mapBox/MarkerMapbox";
import { MapContext } from "./data/ActiveContext";

export default function MapBox() {
  const { mapType } = useContext(MapContext);
  const [viewport, setViewport] = useState({
    latitude: -29.589622,
    longitude: -50.808668,
    zoom: 15.5,
  });
  const renderMap = () => (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
      mapStyle={mapType}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <MarkerMapBox />
    </MapGL>
  );

  useEffect(() => {
    console.log(mapType);
    renderMap();
  });

  //https://docs.mapbox.com/api/maps/styles/

  return (
    <div className="flex w-full h-screen">
      <span>{mapType}</span>
      {renderMap()}
    </div>
  );
}
