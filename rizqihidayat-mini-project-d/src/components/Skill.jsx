import React from "react";

function Skill() {
  return (
    <div>
      <section className="text-gray-400 bg-three body-font">
        <div className="text-center pt-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            <span className="block xl:inline">Tools Yang Saya Pakai</span>
          </h1>
        </div>
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/image/skill.svg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto">
            <div className=" w-80 rounded-xl shadow-md p-5 border border-gray-50 bg-white">
              <p className="text-gray-700 text-lg">HTML + CSS</p>
              <div class="relative w-full bg-gray-200 rounded my-2">
                <div className="absolute top-0 h-4 rounded shim-blue w-full"></div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                <img
                  src="/image/logos/html-css.png"
                  alt="icons"
                  className="h-6"
                />
              </p>
            </div>
            <div className=" w-80 rounded-xl shadow-md p-5 border border-gray-50 bg-white">
              <p className="text-gray-700 text-lg">Javascript</p>
              <div class="relative w-full bg-gray-200 rounded my-2">
                <div className="absolute top-0 h-4 rounded shim-blue w-full"></div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                <img src="/image/logos/js.png" alt="icons" className="h-6" />
              </p>
            </div>
            <div className=" w-80 rounded-xl shadow-md p-5 border border-gray-50 bg-white">
              <p className="text-gray-700 text-lg">Dart/Flutter</p>
              <div class="relative w-full bg-gray-200 rounded my-2">
                <div className="absolute top-0 h-4 rounded shim-blue w-full"></div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                <img
                  src="/image/logos/dartflutter.png"
                  alt="icons"
                  className="h-6"
                />
              </p>
            </div>
            <div className=" w-80 rounded-xl shadow-md p-5 border border-gray-50 bg-white">
              <p className="text-gray-700 text-lg">Reactjs</p>
              <div class="relative w-full bg-gray-200 rounded my-2">
                <div className="absolute top-0 h-4 rounded shim-blue w-full"></div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                <img
                  src="/image/logos/reactjs.png"
                  alt="icons"
                  className="h-6"
                />
              </p>
            </div>
            <div className=" w-80 rounded-xl shadow-md p-5 border border-gray-50 bg-white">
              <p className="text-gray-700 text-lg">Python</p>
              <div class="relative w-full bg-gray-200 rounded my-2">
                <div className="absolute top-0 h-4 rounded shim-blue w-full"></div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                <img
                  src="/image/logos/python.png"
                  alt="icons"
                  className="h-6"
                />
              </p>
            </div>
            <div className=" w-80 rounded-xl shadow-md p-5 border border-gray-50 bg-white">
              <p className="text-gray-700 text-lg">Figma</p>
              <div class="relative w-full bg-gray-200 rounded my-2">
                <div className="absolute top-0 h-4 rounded shim-blue w-full"></div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                <img src="/image/logos/figma.png" alt="icons" className="h-6" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
