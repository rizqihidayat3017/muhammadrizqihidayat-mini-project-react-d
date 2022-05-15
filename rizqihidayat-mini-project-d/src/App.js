import "./App.css";
import First from "./components/First.jsx";
import Project from "./components/Project";
import Kepanitiaan from "./components/Kepanitiaan";
import Organisasi from "./components/Organisasi";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <First />
      <Organisasi />
      <Kepanitiaan />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
