"use client";
import Image from "next/image";
import {
  FaBuilding,
  FaUniversity,
  FaPassport,
  FaServicestack,
} from "react-icons/fa";

export default function SecondBlock() {
  return (
    <div className="relative bg-white py-16 mb-10 mt-10 pb-20 pt-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/map-overly.png"
          alt="Map Overlay"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-700 tracking-wider uppercase">
            Popular Services
          </h2>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
            We Provide Modern Business{" "}
            <span className="text-rpBlue">Consulting Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="group relative p-6 bg-white hover:bg-rpBlue hover:text-white transition-all duration-300 shadow-lg border border-rpBlue">
            <FaBuilding className="text-rpBlue group-hover:text-white w-12 h-12 mx-auto mb-4 transition-colors duration-300" />
            <h4 className="text-xl font-semibold mb-4 text-center">법인설립</h4>
          </div>
          <div className="group relative p-6 bg-white hover:bg-rpBlue hover:text-white transition-all duration-300 shadow-lg border border-rpBlue">
            <FaUniversity className="text-rpBlue group-hover:text-white w-12 h-12 mx-auto mb-4 transition-colors duration-300" />
            <h4 className="text-xl font-semibold mb-4 text-center">
              은행 계좌 개설
            </h4>
          </div>
          <div className="group relative p-6 bg-white hover:bg-rpBlue hover:text-white transition-all duration-300 shadow-lg border border-rpBlue">
            <FaPassport className="text-rpBlue group-hover:text-white w-12 h-12 mx-auto mb-4 transition-colors duration-300" />
            <h4 className="text-xl font-semibold mb-4 text-center">
              비자 발급
            </h4>
          </div>
          <div className="group relative p-6 bg-white hover:bg-rpBlue hover:text-white transition-all duration-300 shadow-lg border border-rpBlue">
            <FaServicestack className="text-rpBlue group-hover:text-white w-12 h-12 mx-auto mb-4 transition-colors duration-300" />
            <h4 className="text-xl font-semibold mb-4 text-center">
              서비스 오피스
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="flex justify-center space-x-4">
            <Image
              src="/corporation-2.png"
              alt="Corporation 2"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/corporation-3.png"
              alt="Corporation 3"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-left mt-8 md:mt-0 mx-20">
            <h3 className="text-2xl font-bold">
              고객이 비즈니스에만 집중할 수 있도록,
            </h3>
            <h3 className="text-2xl font-bold">라이즈파트너스가 함께합니다.</h3>
            <p className="mt-4 text-gray-700">
              우리는 무엇보다 고객을 항상 최우선 합니다. 고객과의 소중한 약속을
              신성하게 여기며, 고객과의 신뢰를 최우선의 가치로 삼습니다. 고객이
              마음놓고 의지할 수 있는 든든한 파트너가 되는 것, 그것이 우리가
              추구하는 사명입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
