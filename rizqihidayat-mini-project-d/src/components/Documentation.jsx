import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Documentation() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div>
      <section
        className="text-gray-400 bg-three body-font mt-20"
        data-aos="fade-up"
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/3 lg:mb-0 mb-4">
              Beberapa Dokumentasi Kegiatan Kepanitiaan
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-black">
              Kepanitiaan adalah Suatu organisasi yang terdiri dari dua orang
              atau lebih yang berfungsi sebagai pelaksana kebijakan Organisasi
              dalam upaya melaksanakan suatu program kerja dan bertanggungjawab
              kepada seluruh pengurus Organisasi
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src="/image/dokumentasi/gambar6.jpg"
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src="/image/dokumentasi/gambar4.jpg"
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  className="w-full h-full object-cover object-center block"
                  src="/image/dokumentasi/gambar5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  className="w-full h-full object-cover object-center block"
                  src="/image/dokumentasi/gambar2.jpg"
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src="/image/dokumentasi/gambar7.jpg"
                  alt=""
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src="/image/dokumentasi/gambar3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documentation;
