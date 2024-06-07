"use client";
import Image from "next/image";

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
          <h2 className="text-2xl text-gray-500 tracking-wider uppercase">
            Popular Services
          </h2>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We Provide Modern Business{" "}
            <span className="text-blue-900">Consulting Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["법인설립", "은행 계좌 개설", "비자 발급", "서비스 오피스"].map(
            (service, index) => (
              <div
                key={index}
                className="relative p-6 bg-white hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg border border-blue-900"
              >
                <h4 className="text-xl font-semibold mb-4">{service}</h4>
              </div>
            )
          )}
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
          <div className="text-left mt-8 md:mt-0">
            <h3 className="text-2xl font-extrabold">
              고객이 비즈니스에만 집중할 수 있도록, 라이즈파트너스가 함께합니다.
            </h3>
            <p className="mt-4 text-gray-600">
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
