import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div>
        <Navbar />
        <Image />
        <DeskripsiInfo name="Front End Developer." />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="border-gray-200 px-4 py-9 dark:bg-gray-800 ">
      <div className="flex justify-between items-center">
        <a className="flex items-center">
          <img
            src="/Image/LOGO.png"
            className="mr-3 h-6 sm:h-12"
            alt="LightSoft Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LightSoft
          </span>
        </a>
        <div>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Organisasi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kepanitiaan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
  const judul = "Hello, My Name Is Rizqi Hidayat";
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
      </div>
    </div>
  );
}

export default App;
