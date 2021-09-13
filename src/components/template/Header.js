import Logo from "../Icon";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="flex items-center bg-center w-screen h-80 bg-blue-600">
      <div className="w-80 items-center mx-20">
        <Logo />
      </div>
      <nav className="flex">
        <ul className="flex text-2xl capitalize text-white">
          <li className=" mx-4 px-4">
            <Link to="/">Home</Link>
          </li>
          <li className=" mx-4 px-4">
            <Link to="/about">About</Link>
          </li>
          <li className=" mx-4 px-4">
            <Link to="/caixa-de-emenda">Caixa de Emenda</Link>
          </li>
          <li className=" mx-4 px-4">
            <Link to="/page-map-box">Map Box</Link>
          </li>
          <li className=" mx-4 px-4">
            <Link to="/page-draw-map">Draw Map</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
