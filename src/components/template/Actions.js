import { IconCte, IconCto } from "../Icon";
import { useContext } from "react";
import { ActiveContext, MapContext } from "../data/ActiveContext";

const Actions = () => {
  const { cto, setCto } = useContext(ActiveContext);
  const { mapType, setMapType } = useContext(MapContext);

  return (
    <ul className="flex flex-col mt-10 p-4 relative z-30">
      <span>{mapType}</span>
      <h2 className="flex w-full uppercase mb-4">Adicionar {cto}</h2>
      <hr className=" flex w-full border-t-2 px-5" />
      <li
        className={`cursor-pointer flex items-center ${
          cto === "cto" && "text-green-500"
        }`}
        title="Adicionar Caixa de Atendimento"
        onClick={() => setCto("cto")}
      >
        {<IconCto />}
        <span>CTO</span>
      </li>
      <li
        className={`cursor-pointer flex items-center ${
          cto === "cte" && "text-green-500"
        }`}
        title="Adicionar Caixa de Emenda"
        onClick={() => setCto("cte")}
      >
        {<IconCte />}
        <span>CTE</span>
      </li>
      <li className="flex flex-col pt-5">
        Tipo de Mapa
        {/* https://docs.mapbox.com/api/maps/styles/ */}
        <span
          onClick={setMapType("mapbox://styles/mapbox/satellite-v9")}
          className="cursor-pointer"
        >
          Satelite
        </span>
        <span
          onClick={setMapType("mapbox://styles/mapbox/dark-v10")}
          className="cursor-pointer"
        >
          Escuro
        </span>
        <span
          onClick={setMapType("mapbox://styles/mapbox/light-v10")}
          className="cursor-pointer"
        >
          Claro
        </span>
        <span
          onClick={setMapType("mapbox://styles/mapbox/streets-v11")}
          className="cursor-pointer"
        >
          Estradas
        </span>
      </li>
    </ul>
  );
};

export default Actions;
