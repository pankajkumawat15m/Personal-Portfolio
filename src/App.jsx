import Home from './pages/Home';
import { Toaster } from 'sonner'; // ✅ Import Toaster

function App() {
  return (
    <div className="bg-light">
      {/* Toast UI for global notifications */}
      <Toaster richColors position="top-center" />

      {/* Main content */}
      <Home />
    </div>
  );
}

export default App;
