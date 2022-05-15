import React from "react";

function Skill() {
  return (
    <div>
      <section className="text-gray-400 bg-three body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/image/skill.svg"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-primary">
                HTML/CSS
              </span>
              <span className="text-sm font-medium text-black dark:text-primary">
                80%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-primary">
                Dart Flutter
              </span>
              <span className="text-sm font-medium text-black dark:text-primary">
                70%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-primary">
                Java
              </span>
              <span className="text-sm font-medium text-black dark:text-primary">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-primary">
                Figma
              </span>
              <span className="text-sm font-medium text-black dark:text-primary">
                80%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "85%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-primary">
                Python
              </span>
              <span className="text-sm font-medium text-black dark:text-primary">
                80%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-primary">
                React
              </span>
              <span className="text-sm font-medium text-black dark:text-primary">
                50%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
