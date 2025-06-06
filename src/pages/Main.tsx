import Sidebar from "../components/Sidebar";
import '../css/main.css';
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// src/pages/Main.tsx

export default function Main() {
  return (
    <main>
        <Sidebar />
        <div className="main-content">
            <NavBar />
            <Outlet />
        </div>
    </main>
  );
}
