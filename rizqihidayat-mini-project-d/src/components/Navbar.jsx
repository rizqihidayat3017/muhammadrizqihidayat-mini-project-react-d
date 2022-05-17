import React from "react";

function Navbar() {
  return (
    <div>
      <section className="w-full px-8 text-gray-700 bg-secondary">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-white select-none hover:text-indigo-700">
                M Rizqi H.
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="/beranda"
                className="mr-5 font-medium leading-6 text-white hover:text-indigo-700"
              >
                Beranda
              </a>
              <a
                href="/organisasi"
                className="mr-5 font-medium leading-6 text-white hover:text-indigo-700"
              >
                Organisasi
              </a>
              <a
                href="/project"
                className="mr-5 font-medium leading-6 text-white hover:text-indigo-700"
              >
                Portofolio
              </a>
              <a
                href="/kepanitiaan"
                className="mr-5 font-medium leading-6 text-white hover:text-indigo-700"
              >
                Kepanitiaan
              </a>
            </nav>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="#_"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Masuk
            </a>
          </div>
        </div>
        {/* <Outlet /> */}
      </section>
    </div>
  );
}

export default Navbar;
