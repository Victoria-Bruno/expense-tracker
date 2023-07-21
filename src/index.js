import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//createRoot is part of the react library and it is used to say
//that what is rendered here will be injected at the div with id='root'
//check public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
//to tell what should be render at that root:
root.render(<App />);
