"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBuilding, FaTruck, FaGlobe, FaChartLine } from "react-icons/fa";

export default function SecondBlock() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="order-1 md:order-1 w-full mb-8 md:mb-0">
          <div className="relative w-full h-64 lg:h-auto">
            <Image
              src="/about-us-2.png"
              alt="About Us Image 2"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="order-2 md:order-2 text-gray-700 leading-relaxed px-20 pt-20">
          <h2 className="text-base text-rpBlue font-semibold tracking-wide uppercase mb-4">
            Who We Are
          </h2>
          <h1 className="text-4xl font-bold mb-6">
            캐나다 진출의 첫걸음
            <br />
            필요한 모든것을 돕습니다.
          </h1>
          <ul className="list-none mb-6 space-y-6">
            <li className="flex items-start group">
              <Link href="/corporation" className="flex items-start">
                <FaBuilding className="text-rpBlue w-8 h-8 mr-4 group-hover:text-rpOrange transition-colors duration-300" />
                <span className="flex flex-col">
                  <strong className="text-lg font-semibold group-hover:text-rpBlue transition-colors duration-300">
                    법인서비스
                  </strong>
                  <span className="text-gray-700 group-hover:text-rpBlue transition-colors duration-300">
                    법인 설립부터 회계, 세무, 법률 상담 및 비자까지
                  </span>
                </span>
              </Link>
            </li>
            <li className="flex items-start group">
              <Link href="/support" className="flex items-start">
                <FaTruck className="text-rpBlue w-8 h-8 mr-4 group-hover:text-rpOrange transition-colors duration-300" />
                <span className="flex flex-col">
                  <strong className="text-lg font-semibold group-hover:text-rpBlue transition-colors duration-300">
                    지원서비스
                  </strong>
                  <span className="text-gray-700 group-hover:text-rpBlue transition-colors duration-300">
                    캐나다에서 필요한 다양한 대행 서비스
                  </span>
                </span>
              </Link>
            </li>
            <li className="flex items-start group">
              <Link href="/business-consulting" className="flex items-start">
                <FaGlobe className="text-rpBlue w-8 h-8 mr-4 group-hover:text-rpOrange transition-colors duration-300" />
                <span className="flex flex-col">
                  <strong className="text-lg font-semibold group-hover:text-rpBlue transition-colors duration-300">
                    비즈니스컨설팅
                  </strong>
                  <span className="text-gray-700 group-hover:text-rpBlue transition-colors duration-300">
                    글로벌 진출을 위한 산업별 전문 컨설팅 서비스
                  </span>
                </span>
              </Link>
            </li>
            <li className="flex items-start group">
              <Link href="/corporation-consulting" className="flex items-start">
                <FaChartLine className="text-rpBlue w-8 h-8 mr-4 group-hover:text-rpOrange transition-colors duration-300" />
                <span className="flex flex-col">
                  <strong className="text-lg font-semibold group-hover:text-rpBlue transition-colors duration-300">
                    상장컨설팅
                  </strong>
                  <span className="text-gray-700 group-hover:text-rpBlue transition-colors duration-300">
                    캐나다 주식 시장의 상장 컨설팅 서비스
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
