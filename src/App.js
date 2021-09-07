import { Header } from "./components/template/Header";
import Main from "./components/Main"
import Default from "./components/template/Default";
import {
  BrowserRouter as Router
} from "react-router-dom";
import NavRouter from "./Router";

function App() {
  return (
    <Default> <Router><Header/><Main><NavRouter /></Main></Router></Default>
  
  );
}

export default App;
