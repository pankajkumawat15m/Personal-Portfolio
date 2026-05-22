import Home from "./pages/Home";
import { Toaster } from "sonner"; // ✅ Import Toaster

function App() {
  return (
    <div className="bg-dark text-light min-h-screen transition-colors duration-300 relative">
      {/* Toast UI for global notifications */}
      <Toaster richColors position="top-center" />

      {/* Main content */}
      <Home />
    </div>
  );
}

export default App;
