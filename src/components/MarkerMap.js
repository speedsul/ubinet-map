import { Cte } from "./Icon";
import { useState } from "react";
export const MarkerMap = (props) => {
  const type = props.data.type;
  const [show, setShow] = useState(false);

  return (
    <div className="text-gray-500 bg-gray-200 rounded-lg">
      <div
        className={`z-50 bg-gray-100 h-full w-80 ${show ? "flex" : "hidden"}`}
      >
        <ul className="text-2xl">
          <li>{props.data.id}</li>
          <li>{props.data.name}</li>
          <li>{props.data.marca}</li>
          <li>{props.data.capacidade}</li>
          <li>{type}</li>
          <li>{props.data.color}</li>
          <li>{props.data.status}</li>
          <li>{props.data.show}</li>
        </ul>
      </div>
      <span
        onClick={() => setShow(!show)}
        className={`${type === "CTO" ? "text-green-400" : "text-blue-600"}`}
      >
        <Cte />
      </span>
    </div>
  );
};
