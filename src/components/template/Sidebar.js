import { useState } from "react";
import { IconView } from "../Icon";
import Actions from "./Actions";

const Sidebar = () => {
  const [togle, setTogle] = useState(false);
  return (
    <aside className="flex left-1 top-1/4 fixed w-40">
      <div
        title={togle ? "Esconder Menu" : "Mostrat menu"}
        className="z-40 relative hover:text-white cursor-pointer"
        onClick={() => setTogle(!togle)}
      >
        <IconView />
      </div>
      {togle && <Actions />}
    </aside>
  );
};

export default Sidebar;
