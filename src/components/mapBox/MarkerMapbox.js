import { Marker } from "react-map-gl";
import { IconCto } from "../Icon";

const MarkerMapBox = ({ latitude, longitude, type, onClick }) => {
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      className={`text-green-500`}
      onClick={onClick}
    >
      <IconCto />
    </Marker>
  );
};

export default MarkerMapBox;
