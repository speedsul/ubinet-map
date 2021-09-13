import { useState } from "react";
import MapGL from "react-map-gl";

export default function MapBox() {
  const [style, setStyle] = useState("mapbox://styles/mapbox/satellite-v9");
  const [viewport, setViewport] = useState({
    latitude: -29.589622,
    longitude: -50.808668,
    zoom: 15.5,
  });
  function getCursor({ isHovering, isDragging }) {
    return isDragging ? "grabbing" : isHovering ? "pointer" : "default";
  }
  const routes = {
    routes: [
      {
        legs: [
          {
            steps: [],
            weight: 1332.6,
            distance: 4205,
            summary: "",
            duration: 1126,
          },
        ],
        weight_name: "cyclability",
        geometry: {
          coordinates: [
            [-84.518399, 39.134126],
            [-84.51841, 39.133781],
            [-84.520024, 39.133456],
            [-84.520321, 39.132597],
            [-84.52085, 39.128019],
            [-84.52036, 39.127901],
            [-84.52094, 39.122783],
            [-84.52022, 39.122713],
            [-84.520768, 39.120841],
            [-84.519639, 39.120268],
            [-84.51233, 39.114141],
            [-84.512652, 39.11311],
            [-84.512399, 39.112216],
            [-84.513232, 39.112084],
            [-84.512127, 39.107599],
            [-84.512904, 39.107489],
            [-84.511692, 39.102682],
            [-84.511987, 39.102638],
          ],
          type: "LineString",
        },
        weight: 1332.6,
        distance: 4205,
        duration: 1126,
      },
    ],
  };
  //https://docs.mapbox.com/api/maps/styles/
  // const stleList = [
  //   {
  //     Streets: "mapbox://styles/mapbox/streets-v11",
  //     light: "mapbox://styles/mapbox/light-v10",
  //     satellite: "mapbox://styles/mapbox/satellite-v9",
  //   },
  // ];
  return (
    <div className="flex w-full h-screen">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
        mapStyle={style}
        routes={routes}
        // onClick={(e) => console.log(e)}
        onMouseUp={(e) => console.log(e)}
        width="100%"
        height="100%"
        getCursor={getCursor}
        onViewportChange={(viewport) => setViewport(viewport)}
      />
    </div>
  );
}
