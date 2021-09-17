import { IconCte, IconCto, IconMap } from "../Icon";
import { useContext } from "react";
import { ActiveContext, MapContext } from "../data/ActiveContext";

const Actions = () => {
  const { cto, setCto } = useContext(ActiveContext);
  const { setMapType } = useContext(MapContext);

  return (
    <ul className="flex flex-col mt-10 p-4 relative z-30">
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
      <span className="flex flex-col pt-5">
        <li>
          Tipo de Mapa
          {/* https://docs.mapbox.com/api/maps/styles/ */}
          <span
            onClick={() => setMapType("mapbox://styles/mapbox/satellite-v9")}
            className="cursor-pointer p-3"
          >
            <IconMap tipo="satelite" alt="satelite" />
          </span>
        </li>
        <li>
          <span
            onClick={() => setMapType("mapbox://styles/mapbox/dark-v10")}
            className="cursor-pointer p-3"
          >
            <IconMap tipo="escuro" alt="escuro" />
          </span>
        </li>
        <li>
          <span
            onClick={() => setMapType("mapbox://styles/mapbox/light-v10")}
            className="cursor-pointer p-3"
          >
            <IconMap alt="claro" />
          </span>
        </li>
        <li>
          <span
            onClick={() => setMapType("mapbox://styles/mapbox/streets-v11")}
            className="cursor-pointer p-3"
          >
            <IconMap tipo="estrada" alt="estradas" />
          </span>
        </li>
      </span>
    </ul>
  );
};

export default Actions;
