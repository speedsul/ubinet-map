import { Header } from "./components/template/Header";
import { useState } from "react";
import Main from "./components/Main";
import Default from "./components/template/Default";
import { BrowserRouter as Router } from "react-router-dom";
import NavRouter from "./Router";
import Sidebar from "./components/template/Sidebar";
import { ActiveContext } from "./components/data/ActiveContext";

function App() {
  const [cto, setCto] = useState("cto");
  return (
    <Default>
      <ActiveContext.Provider value={{ cto, setCto }}>
        <Router>
          <Header />
          <Sidebar />
          <Main>
            <NavRouter />
          </Main>
        </Router>
      </ActiveContext.Provider>
    </Default>
  );
}

export default App;
