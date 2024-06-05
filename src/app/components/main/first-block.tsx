"use client";
import BackgroundVideo from "../background-video";
import { useState, useEffect } from "react";
import Link from "next/link";

//? 해야할일
//~ 비디오 영상 밑에 이미지 파일 추가
//~ 비디오 영상 끝나면 이미지 파일로 전환
//~ 텍스트 에니메이션 효과

export default function FirstBlock() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="absolute inset-0 z-10">
        <div
          className={`flex flex-col items-center justify-center text-white text-center transition-transform transform-gpu duration-1000 ${
            currentSection === 0 ? "h-screen" : "h-0 overflow-hidden"
          }`}
        >
          <p className="text-xl bg-blue-900 px-4 py-2 rounded">
            라이즈파트너스가 당신과 함께 하겠습니다.
          </p>
          <h1 className="text-6xl font-bold mt-4">
            당신의 여정은 미래로 계속 이어집니다.
          </h1>
          <p className="text-lg mt-2">
            Your journey continues into the future.
          </p>
          <Link href="/contact">
            <div className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md flex items-center space-x-2 cursor-pointer">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
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
          <p className="text-xl bg-blue-900 px-4 py-2 rounded">
            라이즈파트너스가 당신과 함께 하겠습니다.
          </p>
          <h1 className="text-6xl font-bold mt-4">
            캐나다로의 새로운 시작을 응원합니다.
          </h1>
          <p className="text-lg mt-2">
            I support you in your new beginning in Canada.
          </p>
          <Link href="/contact">
            <div className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md flex items-center space-x-2 cursor-pointer">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
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
