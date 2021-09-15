import { Header } from "./components/template/Header";
import { useState } from "react";
import Main from "./components/Main";
import Default from "./components/template/Default";
import { BrowserRouter as Router } from "react-router-dom";
import NavRouter from "./Router";
import Sidebar from "./components/template/Sidebar";
import { ActiveContext, MapContext } from "./components/data/ActiveContext";

function App() {
  const [cto, setCto] = useState("cto");
  const [mapType, setMapType] = useState("mapbox://styles/mapbox/satellite-v9");
  return (
    <Default>
      <ActiveContext.Provider value={{ cto, setCto }}>
        <Router>
          <Header />
          <MapContext.Provider value={{ mapType, setMapType }}>
            <Sidebar />
            <Main>
              <NavRouter />
            </Main>
          </MapContext.Provider>
        </Router>
      </ActiveContext.Provider>
    </Default>
  );
}

export default App;
