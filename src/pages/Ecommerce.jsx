import React from "react";
import { BsDot } from "react-icons/bs";
import { Stacked, Pie, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white 
        dark:text-gray-900 
        dark:bg-secondary-dark-bg 
        h-44 rounded-xl w-full 
        lg:w-80 p-8 pt-9 m-3 
        bg-hero-pattern bg-no-repeat
        bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl dark:text-gray-100">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6 ">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div
          className="flex flex-wrap
        justify-center items-center m-3 gap-1"
        >
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200
               dark:bg-secondary-dark-bg md:w-56  p-4 
               pt-9 rounded-2xl "
            >
              <button
                type="button"
                className="text-2xl opacity-0.9 
                rounded-full p-4 hover:drop-shadow-xl"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p
                className="text-gray-400 mt-1 
              rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-wrap
        justify-center m-3 gap-10"
      >
        <div
          className="bg-white dark:text-gray-200
         dark:bg-secondary-dark-bg m-3 p-4
          rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p
                className="flex
                 items-center gap-2
               text-gray-600 hover:drop-shadow-xl"
              >
                <span>
                  <BsDot />
                </span>
                <span>Expense</span>
              </p>
              <p
                className="flex
                 items-center gap-2
               text-green-400 hover:drop-shadow-xl"
              >
                <span>
                  <BsDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div
            className="mt-10 flex gap-10 
          flex-wrap justify-center"
          >
            <div
              className="border-r-1 border-color
             m-4 p-10"
            >
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,43823</span>
                  <span
                    className="p-1.5 hover:drop-shadow-xl
                 cursor-pointer rounded-full text-white
                  bg-green-400 ml-3 text-xs"
                  >
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Badget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$43,43823</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  type="button"
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
