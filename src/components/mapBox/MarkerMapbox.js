import { Marker } from "react-map-gl";
import { IconCto } from "../Icon";

const MarkerMapBox = () => {
  return (
    <Marker
      latitude={-29.589622}
      longitude={-50.808668}
      className={`text-green-500`}
    >
      <IconCto />
    </Marker>
  );
};

export default MarkerMapBox;
