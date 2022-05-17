import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gql, useQuery } from "@apollo/client";

const GET_DATA_PORTOFOLIO = gql`
  query MyQuery {
    project {
      id
      judul
      link_gambar
      deskripsi
      project_kontribusis {
        id
        kontribusi
      }
    }
  }
`;

function Project() {
  const { loading: getDataLoading, data: dataPortofolio } =
    useQuery(GET_DATA_PORTOFOLIO);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return getDataLoading ? (
    <div>
      <h4 className="text-center text-lg font-bold">Loading....</h4>
    </div>
  ) : (
    <div>
      <section className="w-full bg-three ">
        <h2
          className="text-4xl font-bold tracking-tight text-center mb-20 pt-8"
          data-aos="fade-up"
        >
          Sertifikat dan Portofolio
        </h2>
        {dataPortofolio?.project?.map((item) => {
          return (
            <div>
              <div
                className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
                data-aos="fade-up"
              >
                {/* Image */}
                <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                  <img
                    src={item?.link_gambar}
                    className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
                  />
                </div>
                {/* Content */}
                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                  <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    {item?.judul}
                  </h2>
                  <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-justify">
                    {item?.deskripsi}
                  </p>
                  <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                    {item?.project_kontribusis.map((a) => {
                      return (
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                            <span className="text-sm font-bold">✓</span>
                          </span>{" "}
                          {a.kontribusi}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* End  Content */}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Project;
