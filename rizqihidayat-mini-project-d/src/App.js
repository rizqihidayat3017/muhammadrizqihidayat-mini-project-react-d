import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Organisasi from "./components/Organisasi";
import Project from "./components/Project";
import Pagenotfound from "./components/Pagenotfound";
import Dokumentasi from "./pages/Dokumentasi";
import Beranda from "./pages/Beranda";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/organisasi" element={<Organisasi />} />
          <Route path="/project" element={<Project />} />
          <Route path="/kepanitiaan" element={<Dokumentasi />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
