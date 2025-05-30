import Sidebar from "../components/Sidebar";
import '../css/main.css';
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

// src/pages/Main.tsx

export default function Main() {
  return (
    <main>
        {/* Head content va gestito con react-helmet o simili, qui lo omettiamo */}
        <Sidebar />
        <div className="main-content">
            <NavBar />
            <Outlet />
        </div>
    </main>
  );
}
