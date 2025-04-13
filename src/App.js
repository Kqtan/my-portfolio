// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Projects from "./sections/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* Project details */}
        {/* <Route path="/projects/customer-segmentation" element={<div className='p-6 text-white'>Details about Customer Segmentation project.</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
