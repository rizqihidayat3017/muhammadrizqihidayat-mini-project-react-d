import "./App.css";
import First from "./components/First.jsx";
import Project from "./components/Project";
import Kepanitiaan from "./components/Kepanitiaan";
import Organisasi from "./components/Organisasi";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Documentation from "./components/Documentation";
import Address from "./components/Address";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <First />
      <Skill />
      <Organisasi />
      <Project />
      <Kepanitiaan />
      <Documentation />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
