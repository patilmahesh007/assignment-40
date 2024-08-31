import ReactDOM from 'react-dom/client';


import Home from "../src/view/App/App";
import About from  "../src/view/About-us/about"
import Contact from "../src/view/Contact/contact"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentPath = window.location.pathname;
if (currentPath == "/") {
  root.render(<Home />)
}
else if (currentPath == "/about") {
  root.render(<About />)
}
else if (currentPath == "/contact") {
  root.render(<Contact />)
}
else {
  root.render(<h1>404</h1>)
}