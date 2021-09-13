import { Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import CaixaEmenda from "./components/pages/CaixaEmenda";
import Home from "./components/pages/Home";
import PageDrawMap from "./components/pages/PageMapBox";
import PageMapBox from "./components/pages/PageMapBox";

export default function NavRouter() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/caixa-de-emenda">
        <CaixaEmenda />
      </Route>
      <Route path="/page-map-box">
        <PageMapBox />
      </Route>
      <Route path="/page-draw-map">
        <PageDrawMap />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
