import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div>
      <section className="w-full bg-three ">
        <h2
          className="text-4xl font-bold tracking-tight text-center mb-20 pt-8"
          data-aos="fade-up"
        >
          Sertifikat dan Portofolio
        </h2>
        <div
          className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
          data-aos="fade-up-right"
        >
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="/image/Home.png"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>
          {/* Content */}
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              MOBILE APPLICATION (Team)
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-justify">
              Aplikasi Voucher Lab merupakan sebuah aplikasi yang dapat
              memasarkan produk digital, khususnya voucher game dan game itu
              sendiri melalui dua pihak secara langsung (Seller dan Buyer).
              Semua pengguna dapat menjadi buyer, maupun seller secara bersamaan
              dalam satu aplikasi yang terintegrasi dengan payment gateway yaitu
              Midtrans.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Merancang dan mengimplementasikan aplikasi android menggunakan
                Kotlin dalam enam minggu.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Mendukung pengguna dalam membeli voucher game online dengan
                mudah.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Front-end (kotlin), Website-CMS (laravel), Back-end (Golang),
                UI/UX (Figma).
              </li>
            </ul>
          </div>
          {/* End  Content */}
        </div>
        <div
          className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
          data-aos="fade-up-left"
        >
          {/* Content */}
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Web Development (Team)
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Lightsoft Tech merupakan digital production house yang hadir untuk
              memenuhi kebutuhan digital dalam bidang UI/UX, Mobile Application
              Development, Fullstack Engineering, Game Development, dan Visual
              Design.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Merancang dan mengimplementasikan sebuah website dalam kurun
                waktu 4 minggu.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Menjadikan Lightsoft Tech sebagai Platform penghubung antara
                pekerja Freelence dan Customer yang terpercaya.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                lightsoft-tech.netlify.app
              </li>
            </ul>
          </div>
          {/* End  Content */}
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="/image/ligsoft.png"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
        <div
          className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
          data-aos="fade-up-right"
        >
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="/image/kampusmerdeka.png"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>
          {/* Content */}
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none py-20">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Sertifikat PT Gits Indonesia
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              PT. GITS Indonesia atau biasa disebut GITS.ID adalah digital
              agency yang bergerak di bidang IT Consulting. Layanan dari GITS.ID
              sendiri meliputi pengembangan aplikasi seluler, pengembangan situs
              web, audit aplikasi, dan masih banyak lagi.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Kampus Merdeka - Studi Independen
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Menjadi Mobile App Developer dengan Flutter
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                23 Agustus 2021 - 23 Desember 2021
              </li>
            </ul>
          </div>
          {/* End  Content */}
        </div>
      </section>
    </div>
  );
}

export default Project;
