import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import App from "./components/App"
//import Theme from "./components/Theme"
//import Header from "./components/Header";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);
