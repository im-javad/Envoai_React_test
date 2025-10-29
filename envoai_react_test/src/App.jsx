import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LayoutChallenge from "./pages/LayoutChallenge";
import BugHunt from "./pages/BugHunt";

/**
 * 1. Layout Challenge - Fix layout and functionality
 * 2. Bug Hunt - Find and fix logical bugs
 */
function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar with links to both challenges */}
        <nav className="navigation">
          <h1>Junior Frontend Developer Assessment</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Challenge 1: Layout Fix
            </Link>
            <Link to="/bug-hunt" className="nav-link">
              Challenge 2: Bug Hunt
            </Link>
          </div>
        </nav>

        {/* Main content area with route configuration */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LayoutChallenge />} />
            <Route path="/bug-hunt" element={<BugHunt />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
