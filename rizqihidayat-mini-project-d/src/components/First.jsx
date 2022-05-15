import React from "react";

function First() {
  return (
    <div>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row max-w-7xl"></div>
      </section>
      <section className="px-2 py-20 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  <span className="block xl:inline">
                    Hallo, Saya Muhammad Rizqi Hidayat{" "}
                  </span>
                  <p className="block text-color xl:inline">
                    Front End Web Developer
                  </p>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-2xl">
                  Saya seorang Front End Web Developer dengan pengalaman kurang
                  lebih 1 tahun. Saya menggunakan bahasa pemrograman seperti
                  HTML, Java, Reactjs, Python, dan Dart.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="/image/RizqiHidayat_CV.pdf"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Unduh CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a
                    href="mailto:mrizqihidayat3229@gmail.com"
                    className="flex items-center px-6 py-3 text-white bg-primary rounded-md hover:bg-indigo-700 hover:text-white"
                  >
                    Kontak Saya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-96 overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img
                  className="object-cover w-full m-auto h-full "
                  src="/image/dayat.JPG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default First;
