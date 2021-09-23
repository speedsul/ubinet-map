import { useState } from "react";
import { Marker } from "react-map-gl";
import { IconCto } from "../Icon";
import DetailMaps from "./DetailMaps";

const MarkerMapBox = ({
  latitude,
  longitude,
  tipo,
  name,
  marca,
  capacidade,
  color,
  status,
}) => {
  const showDetalhes = () => {
    return (
      <DetailMaps
        name={name}
        marca={marca}
        capacidade={capacidade}
        type={tipo}
        color={color}
        status={status}
      />
    );
  };

  const colorType = tipo === "cto" ? "text-green-500" : "text-blue-700";

  const [togle, setTogle] = useState(false);

  const mostarDetalhes = () => setTogle(!togle);
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      className={`${colorType} z-40 w-full`}
      onClick={() => mostarDetalhes()}
    >
      {!togle ? <IconCto /> : showDetalhes()}
    </Marker>
  );
};

export default MarkerMapBox;
