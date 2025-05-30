import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import '../css/main.css';

// src/pages/Main.tsx

export default function Main() {
  return (
    <main>
        {/* Head content va gestito con react-helmet o simili, qui lo omettiamo */}
        <Sidebar />
        <MainContent />
    </main>
  );
}
