import { IconMap } from "./Icon";

const MenuSidebarTiposMapas = ({ alteraMapa }) => {
  return (
    <ul className="pt-5">
      <hr />
      <div className="pt-3 text-center text-2xl">Mapas</div>
      <span className="flex self-stretch">
        <li>
          {/* https://docs.mapbox.com/api/maps/styles/ */}
          <span
            onClick={() => alteraMapa("mapbox://styles/mapbox/satellite-v9")}
            className="cursor-pointer p-3 "
          >
            <IconMap tipo="satelite" alt="satelite" />
          </span>
        </li>
        <li>
          <span
            onClick={() => alteraMapa("mapbox://styles/mapbox/dark-v10")}
            className="cursor-pointer p-3"
          >
            <IconMap tipo="escuro" alt="escuro" />
          </span>
        </li>
        <li>
          <span
            onClick={() => alteraMapa("mapbox://styles/mapbox/light-v10")}
            className="cursor-pointer p-3"
          >
            <IconMap alt="claro" />
          </span>
        </li>
        <li>
          <span
            onClick={() => alteraMapa("mapbox://styles/mapbox/streets-v11")}
            className="cursor-pointer p-3"
          >
            <IconMap tipo="estrada" alt="estradas" />
          </span>
        </li>
      </span>
    </ul>
  );
};
export default MenuSidebarTiposMapas;
