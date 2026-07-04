import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
// import Dashboard from "./pages/Dashboard"; // Uncomment when Dashboard is ready

function App() {
  return (
    <Router>
      <Routes>
        {/* Root URL automatically redirects to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Application Page Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/documents" element={<Documents />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Catch-all route redirects back to login if user enters a wrong URL */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;