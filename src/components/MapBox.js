import { useState, useContext, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import MapGL, { FullscreenControl } from "react-map-gl";
import MarkerMapBox from "./mapBox/MarkerMapbox";
import { ActiveContext, MapContext } from "./data/ActiveContext";
import {
  Editor,
  DrawPolygonMode,
  EditingMode,
  DrawLineStringMode,
} from "react-map-gl-draw";
import { getFeatureStyle, getEditHandleStyle } from "./style";

export default function MapBox({ mapDatas }) {
  const { mapType } = useContext(MapContext);
  const [viewport, setViewport] = useState({
    latitude: -29.589622,
    longitude: -50.808668,
    zoom: 15.5,
    transition: {
      duration: 300,
      delay: 0,
    },
  });
  const [dataMarker, setDataMarker] = useState([]);
  const [mode, setMode] = useState(null);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const editorRef = useRef(null);
  const { cto } = useContext(ActiveContext);
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
    dataMarkerGet();
  };
  const dataMarkerGet = async () => {
    let marker = await axios.get(`http://localhost:4000/marker`);

    setDataMarker(marker.data);
  };
  const renderMarker = () => {
    return dataMarker?.map((mapData) => (
      <MarkerMapBox
        latitude={mapData.lat}
        longitude={mapData.lng}
        key={mapData.id}
      />
    ));
  };

  const onSelect = useCallback((options) => {
    setSelectedFeatureIndex(options && options.selectedFeatureIndex);
  }, []);

  const onDelete = useCallback(() => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
      editorRef.current.deleteFeatures(selectedFeatureIndex);
    }
  }, [selectedFeatureIndex]);

  const onUpdate = useCallback(({ editType }) => {
    if (editType === "addFeature") {
      setMode(new EditingMode());
    }
  }, []);
  const drawTools = (
    <div className="mapboxgl-ctrl-top-left">
      <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
          title="Polygon tool (p)"
          onClick={() => setMode(new DrawLineStringMode())}
        />
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
          title="Delete"
          onClick={onDelete}
        />
      </div>
    </div>
  );
  useEffect(() => {
    dataMarkerGet();
  }, [dataMarker]);

  const renderMap = () => (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
      mapStyle={mapType}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      onClick={(e) => newCto(e.lngLat[1], e.lngLat[0])}
    >
      <FullscreenControl />
      <Editor
        ref={editorRef}
        style={{ width: "100%", height: "100%" }}
        clickRadius={12}
        mode={mode}
        onSelect={onSelect}
        onUpdate={onUpdate}
        editHandleShape={"circle"}
        featureStyle={getFeatureStyle}
        editHandleStyle={getEditHandleStyle}
      />

      {drawTools}
      {renderMarker()}
    </MapGL>
  );

  //https://docs.mapbox.com/api/maps/styles/

  return <div className="flex w-full h-screen">{renderMap()}</div>;
}
