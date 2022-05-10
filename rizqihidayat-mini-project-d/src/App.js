import "./App.css";
import First from "./components/First.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="Parentbox">
        <Image />
        <DeskripsiInfo name="Front End Developer." />
        <First />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <section className="w-full px-8 text-gray-700 bg-secondary">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-white select-none">
              Portofolio<span className="text-white">.</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-white hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-white hover:text-gray-900"
            >
              Project
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-white hover:text-gray-900"
            >
              Organisasi
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-white hover:text-gray-900"
            >
              Kepanitiaan
            </a>
          </nav>
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="#"
            className="text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
}

function Image() {
  return (
    <div className="Foto">
      <img src="/image/rizqi.JPG" />
    </div>
  );
}

function DeskripsiInfo(props) {
  const judul = "Hello, My Name Is Rizqi Hidayat.";
  const { name } = props;
  return (
    <div>
      <div className="Definisi">
        <h1 className="Cate">{judul}</h1>
        <p className="Title">{name}</p>
        <p className="Info">
          I am a Front End Developer with more than 1 years of experience. I use
          programming language like HTML, Java, Reactjs, Python, and Dart.
        </p>
        <a
          onClick={SendEmail}
          className="contact"
          href="mailto:mrizqihidayat3229@gmail.com"
        >
          Contact Me
        </a>
        <a className="contact ml-4" href="/image/RizqiHidayat_CV.pdf">
          Download CV
        </a>
      </div>
    </div>
  );
}

function SendEmail(props) {
  console.log("mengirimkan email");
}

export default App;
