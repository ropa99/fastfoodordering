import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import Theme from "./components/Theme"

const element = <h2>Hello</h2>
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Theme/>);
