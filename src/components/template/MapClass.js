import MapGL from "react-map-gl";

const config = {
  viewport: {
    latitude: -27.2108001,
    longitude: -49.6446024,
    zoom: 12.8,
    bearing: 0,
    pitch: 0,
  },
};
function MapClass(props) {
console.log(config)
  render() {
    const { width, height } = props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}
export default MapClass;
