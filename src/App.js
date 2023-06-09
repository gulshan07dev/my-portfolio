import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/skills";
// import Projects from "./components/projects";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import './css/style.css';
import './css/utilityclass.css';
import './css/blobz.min.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
