"use client";

export default function ThirdBlock() {
  return (
    <div className="bg-gray-100 py-16 mb-10 mt-10 pb-20 pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-700 tracking-wider uppercase">
            Pricing Package
          </h2>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
            Learn More & Choose Your Best{" "}
            <span className="text-rpBlue">Pricing Package</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-bold mb-2">법인설립</h4>
            <div className="text-3xl font-extrabold mb-2">$ 1,490</div>
            <p className="text-gray-700 mb-4">One-Time</p>
            <ul className="text-left text-gray-700 space-y-2">
              <li>✔ 법인설립(지역, 연방)</li>
              <li>✔ 주정부요금 포함</li>
              <li>✔ + GST(5%)</li>
            </ul>
            <p className="mt-4 text-xs text-gray-700">
              *대행서비스는 가능하면 비대면진행을 원칙으로 합니다.
            </p>
          </div>

          <div className="relative p-6 bg-rpBlue text-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1">
              POPULAR
            </div>
            <h4 className="text-lg font-bold mb-2">표준 법인 관리</h4>
            <div className="text-3xl font-extrabold mb-2">$ 250</div>
            <p className="mb-4">Per Month</p>
            <ul className="text-left space-y-2">
              <li>✔ 법인설립 포함</li>
              <li>✔ 일반 세무 관리 지원</li>
              <li>✔ + GST(5%)</li>
            </ul>
          </div>

          <div className="relative p-6 bg-rpOrange text-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 bg-rpBlue text-white text-xs font-semibold px-2 py-1">
              FEATURED
            </div>
            <h4 className="text-lg font-bold mb-2">프리미엄 관리</h4>
            <div className="text-3xl font-extrabold mb-2">$ 1199</div>
            <p className="mb-4">Per Month</p>
            <ul className="text-left space-y-2">
              <li>✔ 표준법인관리 포함</li>
              <li>✔ 은행 계좌 개설 대행</li>
              <li>✔ 회계사 세무 지원</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-bold mb-2">커스텀 서비스</h4>
            <div className="text-3xl font-extrabold mb-2">$ 상담</div>
            <p className="text-gray-700 mb-4">Per Month</p>
            <ul className="text-left text-gray-700 space-y-2">
              <li>✔ 주재원 비자</li>
              <li>✔ 비서 서비스</li>
              <li>✔ 서비스 오피스 제공</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
