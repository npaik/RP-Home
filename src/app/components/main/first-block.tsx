"use client";
import BackgroundVideo from "../background-video";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FirstBlock() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const videoDuration = 25000; // 25 seconds
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, videoDuration);

    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % 2);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {showVideo ? (
        <BackgroundVideo />
      ) : (
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/Main-bg.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      <div className="absolute inset-0 z-10">
        <div
          className={`flex flex-col items-center justify-center text-white text-center transition-transform transform-gpu duration-1000 ${
            currentSection === 0 ? "h-screen" : "h-0 overflow-hidden"
          }`}
        >
          <p className="text-sm sm:text-sm md:text-lg lg:text-xl bg-opacity-70 bg-prBlue px-4 py-2 rounded">
            라이즈파트너스가 당신과 함께 하겠습니다.
          </p>
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
            당신의 여정은 미래로 계속 이어집니다.
          </h1>
          <p className="text-sm sm:text-sm md:text-lg lg:text-xl mt-2">
            Your journey continues into the future.
          </p>
          <Link href="/contact">
            <div className="mt-4 bg-orange-500 bg-opacity-70 hover:bg-rpOrange hover:bg-opacity-50 text-white py-2 px-6 rounded-md flex items-center space-x-2 cursor-pointer">
              <span className="text-sm sm:text-sm font-bold">Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 sm:w-4 sm:h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div
          className={`flex flex-col items-center justify-center text-white text-center transition-transform transform-gpu duration-1000 ${
            currentSection === 1 ? "h-screen" : "h-0 overflow-hidden"
          }`}
        >
          <p className="text-sm sm:text-sm md:text-lg lg:text-xl bg-opacity-70 bg-prBlue px-4 py-2 rounded">
            라이즈파트너스가 당신과 함께 하겠습니다.
          </p>
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
            캐나다로의 새로운 시작을 응원합니다.
          </h1>
          <p className="text-sm sm:text-sm md:text-lg lg:text-xl mt-2">
            I support you in your new beginning in Canada.
          </p>
          <Link href="/contact">
            <div className="mt-4 bg-rpOrange bg-opacity-70 hover:bg-rpOrange hover:bg-opacity-50 text-white py-2 px-6 rounded-md flex items-center space-x-2 cursor-pointer">
              <span className="text-sm sm:text-sm font-bold">Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 sm:w-4 sm:h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
