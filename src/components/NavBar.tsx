import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { label: "About", path: "/" },
        { label: "Resume", path: "/resume" },
        { label: "Portfolio", path: "/portfolio" },
        //{ label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navLinks.map((link) => (
                    <li className="navbar-item" key={link.path}>
                        <button
                            className={`navbar-link${location.pathname === link.path ? " active" : ""}`}
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
