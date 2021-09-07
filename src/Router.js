import { Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import CaixaEmenda from "./components/pages/CaixaEmenda";
import Home from "./components/pages/Home";

export default function NavRouter() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/caixa-de-emenda">
        <CaixaEmenda />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
