import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div>
        <Navbar />
        <Image />
        <DeskripsiInfo name="Muhammad Rizqi Hidayat" />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center">
          <img
            src="/Image/LOGO.png"
            className="mr-3 h-6 sm:h-9"
            alt="LightSoft Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            LightSoft
          </span>
        </a>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
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
  const judul = "Description";
  const { name } = props;
  return (
    <div>
      <div className="Definisi">
        <h1 className="Cate">{judul}</h1>
        <p className="Title">{name}</p>
        <p className="Info">
          Mahasiswa Progam Studi Informatika, Fakultas Ilmu Komputer,
          Universitas Jember. Selalu berkemauan untuk menjadi pribadi yang lebih
          baik, disiplin waktu, dan bertanggung jawab.
        </p>
      </div>
    </div>
  );
}

export default App;
