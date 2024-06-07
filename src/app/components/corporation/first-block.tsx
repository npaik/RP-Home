"use client";
import Image from "next/image";
import Link from "next/link";

export default function FirstBlock() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 mt-10 pb-20 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-2xl text-gray-600 tracking-wide mb-2">
            법인서비스
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            법인설립부터
            <br />
            통합관리서비스
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            캐나다 진출에 꼭 필요한 법인설립 부터 다양한 지원 서비스를
            제공합니다. 캐나다에서 꼭 필요하고 유용한 정보를 제공하고, 더욱
            유리한 운영을 위해 최고의 컨설팅서비스를 제안합니다.
          </p>
          <ul className="text-gray-700 mb-8">
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-900 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l-5-5h10l5 5z"></path>
              </svg>
              밴쿠버에 한국팀 상주
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-900 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l-5-5h10l5 5z"></path>
              </svg>
              밴쿠버 다운타운에 서비스 오피스 구축
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-900 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l-5-5h10l5 5z"></path>
              </svg>
              현지 은행과 지정 네트워크 보유
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-900 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l-5-5h10l5 5z"></path>
              </svg>
              한국 현지 변호사 법률 지원
            </li>
          </ul>
          <Link href="/contact">
            <div className="mt-4 bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded-md inline-flex items-center space-x-2 cursor-pointer">
              <span>Learn More</span>
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
        <div className="relative w-full h-64 md:h-auto flex justify-center">
          <Image
            src="/corporation-1.png"
            alt="Corporate Services"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
