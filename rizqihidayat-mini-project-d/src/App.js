import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Organisasi from "./components/Organisasi";
import Project from "./components/Project";
import Pagenotfound from "./components/Pagenotfound";
import Dokumentasi from "./pages/Dokumentasi";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organisasi" element={<Organisasi />} />
          <Route path="/project" element={<Project />} />
          <Route path="/kepanitiaan" element={<Dokumentasi />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
