"use client";
import Image from "next/image";

export default function SecondBlock() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
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
        <div className="order-2 md:order-2 text-gray-700 leading-relaxed">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase mb-4">
            Who We Are
          </h2>
          <h1 className="text-4xl font-bold mb-6">
            캐나다 진출의 첫걸음
            <br />
            필요한 모든것을 돕습니다.
          </h1>
          <ul className="list-none mb-6 space-y-4">
            <li className="mb-2 flex items-start">
              <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-4 mt-1"></span>
              <span>
                법인서비스: 법인 설립부터 회계, 세무, 법률 상담 및 법적지원
              </span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-4 mt-1"></span>
              <span>지원서비스: 캐나다에서 필요한 다양한 대행 서비스</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-4 mt-1"></span>
              <span>비즈니스컨설팅: 글로벌 진출을 위한 전략 컨설팅 서비스</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-4 mt-1"></span>
              <span>상장컨설팅: 북미 주식 시장에 상장 관련 컨설팅 서비스</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
