import { Link, useLocation } from "react-router-dom";
import "../../main.css";
import "./Nav.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item krub-bold">
        <Link
          to="/"
          className={
            currentPage === "/Home"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item krub-bold">
        <Link
          to="/About"
          className={
            currentPage === "/About"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          About
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Portfolio
        </Link>
      </li> */}
      <li className="krub-bold portfolioDropdown nav-item dropdown nav-link-custom">
        <a
          className="nav-link dropdown-toggle nav-link-custom"
          data-bs-toggle="dropdown"
          href="/Portfolio"
          role="button"
          aria-expanded="false"
        >
          Portfolio
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/Portfolio">
              Development
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="http://harleysherman.com">
              Design
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item krub-bold">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Resume
        </Link>
      </li>
      <li className="nav-item krub-bold">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "nav-link active"
              : "nav-link nav-link-custom"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item krub-bold">
        <Link
          to="/Blog"
          className={
            currentPage === "/Blog"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Blog
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
