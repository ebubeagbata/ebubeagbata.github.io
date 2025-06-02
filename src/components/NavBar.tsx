import { useNavigate, useLocation } from "react-router-dom";
import { pathClean } from "../utils/url";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "About", path: pathClean("/") },
    { label: "Resume", path: pathClean("/resume") },
    { label: "Portfolio", path: pathClean("/portfolio") },
    //{ label: "Blog", path: "/blog" },
    { label: "Contact", path: pathClean("/contact") },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li className="navbar-item" key={link.path}>
            <button
              className={`navbar-link${
                pathClean(location.pathname) === link.path ? " active" : ""
              }`}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
