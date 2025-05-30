import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

// src/pages/Main.tsx

export default function Main() {
  return (
    <main>
      <div lang="en">
        {/* Head content va gestito con react-helmet o simili, qui lo omettiamo */}
        <Sidebar />
        // TODO: aggiungere il main content
        <MainContent />
      </div>
    </main>
  );
}
