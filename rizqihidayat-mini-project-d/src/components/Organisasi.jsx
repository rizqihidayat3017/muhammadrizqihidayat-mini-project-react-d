import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Organisasi() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-white">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div
            className="flex flex-col items-center sm:px-5 md:flex-row"
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2">
              <a href="#_" className="block">
                <img
                  className="object-contain w-full h-full rounded-lg max-h-64 sm:max-h-96"
                  src="/image/HMIFLOGO.png"
                />
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <div className="bg-primary flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="/image/HMIFLOGO.png"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>HMIF UNEJ</span>
                </div>
                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  <a href="#_">Pengalaman Organisasi</a>
                </h1>
                <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                  Ketua Himpunan Mahasiswa Informatika
                </h2>
                <p className="text-sm text-gray-500">
                  Himpunan Mahasiswa Informatika Fakultas Ilmu Komputer
                  Universitas Jember yang selanjutnya disebut dengan HMIF UNEJ
                  merupakan organisasi mahasiswa yang berada di bawah naungan
                  Program Studi Informatika, dan bertempat di Fakultas Ilmu
                  Komputer Universitas Jember. HMIF UNEJ bertujuan untuk
                  membentuk mahasiswa yang beriman dan bertakwa terhadap Tuhan
                  Yang Maha Esa serta membina insan akademis yang berintelektual
                  untuk menguasai ilmu pengetahuan dan teknologi.
                </p>
                <span className="mx-1">Desember 2021 - Sekarang</span>
              </div>
            </div>
          </div>
          <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            <div
              className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
            >
              <a href="#_" className="block text-center w-full">
                <img
                  className="object-cover h-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 m-auto"
                  src="/image/HMIFLOGO.png"
                />
              </a>
              <div className="bg-primary flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>HMIF UNEJ</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <a href="#_">Himpunan Mahasiswa Informatika</a>
              </h2>
              <p className="text-sm text-gray-500">
                Pengurus Divisi Pengembangan Sumber Daya Mahasiswa
              </p>
              <p className="pt-2 text-xs font-medium">
                <span className="mx-1">Desember 2020 - Desember 2021</span>
              </p>
            </div>
            <div
              className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
            >
              <a href="#_" className="block text-center w-full">
                <img
                  className="object-cover h-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 m-auto"
                  src="/image/forsmawi.png"
                />
              </a>
              <div className="bg-primary flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>FS Jember</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                Forum Silaturahmi Mahasiswa Ngawi Regional Jember
              </h2>
              <p className="text-sm text-gray-500">
                Ketua Umum Forsmawi Jember
              </p>
              <p className="pt-2 text-xs font-medium">
                <span className="mx-1">February 2021 - December 2021</span>
              </p>
            </div>
            <div
              className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
            >
              <a href="#_" className="block text-center w-full">
                <img
                  className="object-cover h-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 m-auto"
                  src="/image/forsmawi.png"
                />
              </a>
              <div className="bg-primary flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>FS Jember</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                Forum Silaturahmi Mahasiswa Ngawi Regional Jember
              </h2>
              <p className="text-sm text-gray-500">Pengurus Forsmawi Jember</p>
              <p className="pt-2 text-xs font-medium">
                {" "}
                <span className="mx-1">Desember 2019 - Januari 2021</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organisasi;
