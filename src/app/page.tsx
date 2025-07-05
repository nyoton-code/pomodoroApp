"use client";

import {
  faChartSimple,
  faCircleCheck,
  faCircleHalfStroke,
  faEllipsisVertical,
  faGear,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [Timer, setTimer] = useState(1500);
  const intervalIdRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const stats = ["pomodoro", "short break", "long break"];
  const statsTimes = [1500, 300, 900];
  const backgroundColors = ["#CD5C5C", "#6495ED", "#5F9EA0", "#111111"];

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(intervalIdRef.current);
            setIsRunning(false);
            return;
          }

          return prevTimer - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }

  //   return () => {
  //     setIsDarkMode(false);
  //   };
  // }, [isDarkMode]);

  useEffect(() => {
    if (!isDarkMode) {
      document.body.style.backgroundColor = backgroundColors[active];
    } else {
      document.body.style.backgroundColor = backgroundColors[3];
    }
    return () => {
      document.body.style.backgroundColor = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isDarkMode]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset(para) {
    setTimer(para);
    setIsRunning(false);
  }

  function formatTime() {
    const mins = String(Math.floor(Timer / 60)).padStart(2, "0");
    const secs = String(Timer % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  return (
    <>
      <header className="mt-3 relative p-5 flex justify-between  after:absolute after:w-1/2 after:h-0.5 after:bg-white after:bottom-0 after:left-6 w-[700px] mx-auto ">
        <span className="font-bold text-xl">
          <FontAwesomeIcon icon={faCircleCheck} />
          <p className="inline-block ml-1">Pomodoro</p>
        </span>
        <div>
          <button className="py-2 px-3 bg-button-bg mr-3 text-base font-medium rounded-md">
            <FontAwesomeIcon icon={faChartSimple} className="mr-1" />
            Report
          </button>
          <button className="py-2 px-3 bg-button-bg mr-3 text-base font-medium rounded-md">
            <FontAwesomeIcon icon={faGear} className="mr-1" />
            Setting
          </button>
          <button className="py-2 px-3 bg-button-bg mr-3 text-base font-medium rounded-md">
            <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
            Sign In
          </button>
          <button className="py-2 px-3 bg-button-bg mr-3 text-base font-medium rounded-md">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </header>

      <div className="bg-backgroundWhite w-[470px] h-72  mx-auto dark:bg[">
        <div className="flex justify-center mt-10 p-6" id="stats">
          {stats.map((label, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                reset(statsTimes[index]);
              }}
              className={`mr-2  px-2 py-1 font-bold rounded-md
                ${active === index ? "active" : ""} `}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="text-center">
          <h2 className="font-extrabold text-8xl tracking-wider ">
            {formatTime()}
          </h2>
        </div>
        <div className="text-center mt-7">
          {!isRunning ? (
            <button
              className="bg-white px-14 py-3 text-xl uppercase font-bold rounded-sm border-b-gray-200 border-b-8 transition text-black"
              onClick={() => start()}
            >
              {Timer === statsTimes[active] ? "start" : "resume"}
            </button>
          ) : (
            <>
              <button
                className="bg-white px-12 py-3 text-xl uppercase font-bold rounded-sm transition text-black"
                onClick={() => stop()}
              >
                pause
              </button>
              <button
                className="bg-white  px-12 ml-3 py-3 text-xl uppercase font-bold rounded-sm transition text-black"
                onClick={() => reset(statsTimes[active])}
              >
                {" "}
                Reset{" "}
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className={`absolute cursor-pointer bg-white text-[#111222] w-8 h-8 flex items-center justify-center text-xl rounded-[50%] right-10 bottom-10 transition ${
          isDarkMode ? "bg-[#111222] text-white" : "bg-white text-[#111222]"
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} className="text-4xl" />
      </div>
    </>
  );
}
