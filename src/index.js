import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import App from "./components/App"

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);
