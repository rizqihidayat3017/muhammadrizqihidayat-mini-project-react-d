import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Kepanitiaan() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div>
      <section className="bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold tracking-tight text-center mt-8"
            data-aos="fade-up"
          >
            Pengalaman Kepanitiaan
          </h2>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div
              className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
              data-aos="fade-down-right"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/bitif.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700 text-center">
                BIT IF (2020)
              </h4>
              <p className="text-base text-justify text-gray-500">
                BIT IF merupakan serangkaian kegiatan yang diselenggarakan pasca
                Pengenalan Kehidupan Kampus (PKK) sebagai usaha untuk lebih
                mengenalkan iklim akademis dan berbagai elemen lainnya dari
                masing-masing fakultas kepada mahasiswa baru.
              </p>
              <p className="text-base text-center">
                Master of Ceremony dan Sie-Perlengkapan
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="zoom-in-up"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/bitif.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                BIT IF (2021)
              </h4>
              <p className="text-base text-justify text-gray-500">
                BIT IF merupakan serangkaian kegiatan yang diselenggarakan pasca
                Pengenalan Kehidupan Kampus (PKK) sebagai usaha untuk lebih
                mengenalkan iklim akademis dan berbagai elemen lainnya dari
                masing-masing fakultas kepada mahasiswa baru.
              </p>
              <p className="text-base text-center">Ketua Panitia</p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="fade-down-left"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/Icom.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                I-Com (2020)
              </h4>
              <p className="text-base text-justify text-gray-500">
                I-Com merupakan perlombaan tingkat Fakultas yang memiliki tujuan
                untuk mengembangkan dan meningkatkan jiwa kompetisi,
                kreativitas, skill serta menambah pengetahuan mahasiswa dalam
                ajang perlombaan yang akan diikuti.
              </p>
              <p className="text-base text-center">Sie-Acara</p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="fade-down-right"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/IO.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">I/O (2020)</h4>
              <p className="text-base text-justify text-gray-500">
                Informatics Olympiad 2022 merupakan sebuah ajang kompetisi ilmu
                pengetahuan dalam bidang teknologi informasi tingkat nasional.
                Kegiatan ini diharapkan mampu mencetak generasi muda yang
                kompetitif, kreatif, dan bermutu.
              </p>
              <p className="text-base text-center">Sie- Perlengkapan</p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="zoom-in-up"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/IT4.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                IT 4 SCHOOL (2020)
              </h4>
              <p className="text-base text-justify text-gray-500">
                IT 4 SCHOOL merupakan kegiatan pengajaran dan pengenalan sejak
                dini tentang perkembangan teknologi informasi terhadap siswa
                Sekolah Dasar.
              </p>
              <p className="text-base text-center">
                Master Of Ceremony dan Sie- Perlengkapan
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="fade-down-left"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/HMIFLOGO.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Sarasehan (2020)
              </h4>
              <p className="text-base text-justify text-gray-500">
                Sarasehan adalah salah satu cara berbagi ilmu dalam
                berorganisasi dan sharing mengenai program kerja di himpunan
                masing-masing. Menangkap hal-hal baru yang dapat dijadikan
                contoh dan disesuaikan, kemudian dikembangkan di Himpunan
                sendiri.
              </p>
              <p className="text-base text-center">Koordinator Acara</p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="zoom-in-up"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/HMIFLOGO.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">ICP (2020)</h4>
              <p className="text-base text-justify text-gray-500">
                Informatics Charity Project (ICP) merupakan suatu kegiatan yang
                dilakukan dengan cara penghimpunan dana mahasiswa untuk
                disalurkan ke masyarakat yang membutuhkan sebagai bentuk peduli
                dan pengabdian ke masyarakat. Pelaksanaan kegiatan yang
                terjadwal, terarah, dan terorganisir dapat mencapai ke
                berlangsungnya kegiatan dan ketepatan sasaran yang dituju.
              </p>
              <p className="text-base text-center">Sie-Acara</p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
              data-aos="zoom-in-up"
            >
              <div className="p-3 text-white bg-primary rounded-full">
                <img className="h-8 w-8" src="/image/HMIFLOGO.png" alt="" />
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Welses (2020)
              </h4>
              <p className="text-base text-justify text-gray-500">
                Welcoming Session merupakan kegiatan untuk menyambut mahasiswa
                baru dalam serangkaian acara sebagai bagian dari keluarga. Lewat
                rangkaian acara ini, Himpunan Mahasiswa Informatika akan
                membantu mereka dalam mengenal lingkungan kampus, mengarahkan
                serta membimbing mereka dalam menjalani kehidupan sehari-hari
                sebagai seorang mahasiswa.
              </p>
              <p className="text-base text-center">Sie-Perlengkapan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kepanitiaan;
