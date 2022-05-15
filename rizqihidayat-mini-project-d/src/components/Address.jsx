import React from "react";

function Address() {
  return (
    <div>
      <section className="text-white bg-white body-font relative">
        <div className="absolute inset-0 bg-three">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?q=desa%20keniten%20rt%20004%20rw%20001%20kecamatan%20geneng%20kabupaten%20ngawi&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-primary shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-white text-lg mb-4 font-medium title-font">
              Hubungi Saya
            </h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Kirim
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Address;
