import { IconCte, IconCto } from "../Icon";
import { useContext } from "react";
import { ActiveContext } from "../data/ActiveContext";

const Actions = () => {
  const { cto, setCto } = useContext(ActiveContext);

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
    </ul>
  );
};

export default Actions;
