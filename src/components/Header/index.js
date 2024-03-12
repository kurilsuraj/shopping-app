import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="header-container">
    <Link to="/">
      <h1>Website Logo</h1>
    </Link>
    <Link to="/">
      <h1>Home</h1>
    </Link>
  </nav>
);

export default Header;
