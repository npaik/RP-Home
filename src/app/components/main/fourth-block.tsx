"use client";
import Link from "next/link";

//? 해야할일
//~ 스페이싱
//~ 폰트

export default function FourthBlock() {
  return (
    <div className="relative z-10 bg-blue-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <p>
            Find an Professional Consulting & Business Agency.{" "}
            <a href="tel:604-609-5390" className="underline">
              Call 604-609-5390
            </a>
          </p>
        </div>
        <Link href="/contact">
          <div className="mt-4 md:mt-0 bg-transparent hover:bg-white text-white hover:text-blue-900 py-2 px-6 rounded-md border border-white flex items-center space-x-2 cursor-pointer">
            <span>Get Consultations</span>
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
  );
}
