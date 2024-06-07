"use client";
import Link from "next/link";
import Image from "next/image";

//? 해야할일
//~ 스페이싱
//~ 폰트
//~ 스타일링
//~ 기존 웹사이트는 카드안 사진을 기점으로 아래부분 배경화면이 검은색으로 되어있음
//~ 아이콘

export default function FifthBlock() {
  return (
    <div className="relative z-10 bg-white py-16">
      <div
        className="absolute inset-y-0 left-0 w-2/3 bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/tile-pattern.png')" }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
            Popular Services
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            많이 찾는 서비스{" "}
            <span className="text-blue-900">Consulting Solutions</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
          <div className="bg-white p-6 rounded shadow-lg text-center relative">
            <div className="absolute inset-x-0 bottom-0 h-2/3"></div>
            <Image
              src="/consulting-1.png"
              alt="Consulting Service 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-4 mt-4">법인서비스</h3>
            <p className="text-gray-600 mb-4">
              법인설립부터, 계좌발급, 세무/회계, 법률 상담까지, 고객이
              캐나다에서 비즈니스를 가장 쉽게 시작할 수 있도록 합니다.
            </p>
            <div className="text-center">
              <Link href="/corporation"></Link>
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow-lg text-center relative">
            <div className="absolute inset-x-0 bottom-0 h-2/3"></div>
            <Image
              src="/consulting-2.png"
              alt="Consulting Service 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-4 mt-4">이민컨설팅</h3>
            <p className="text-gray-600 mb-4">
              비자 발급부터 영주권 취득까지, 캐나다에 정착할 수 있는 다양한
              방법을 제공하고, 가장 최적화 된 솔루션을 찾아 드립니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg text-center relative">
            <div className="absolute inset-x-0 bottom-0 h-2/3"></div>
            <Image
              src="/consulting-3.png"
              alt="Consulting Service 3"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-4 mt-4">대행서비스</h3>
            <p className="text-gray-600 mb-4">
              서비스 오피스를 포함한 다양한 대행 서비스를 제공합니다. 고객의
              비즈니스에 맞는 최적화된 서비스를 함께 만들 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
