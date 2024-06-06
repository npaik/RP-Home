"use client";
import Image from "next/image";

//? 해야할일
//~ 그래프

export default function SixthBlock() {
  return (
    <div className="relative z-10 bg-black py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white leading-relaxed">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
            Why Choose Us
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 tracking-tight text-white">
            캐나다와 한국에서 다년의 경력을 가진 한국인 컨설팅 역량
          </h3>
          <p className="mt-4 text-lg sm:text-xl font-bold">
            최고의 캐나다 진출 컨설팅 회사
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/why-choose-us.png"
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
