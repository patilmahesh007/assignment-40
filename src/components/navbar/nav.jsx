import './nav.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <header>
      <div className="container">
        <Link to="#">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  );
}

export default Footer;
