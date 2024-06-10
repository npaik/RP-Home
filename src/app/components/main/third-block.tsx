"use client";
import Link from "next/link";
import Image from "next/image";

export default function ThirdBlock() {
  return (
    <div className="relative z-10 bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-rpBlue font-semibold tracking-wide uppercase">
            About Company
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
            Learn About Our <span className="text-rpBlue">Company Mission</span>
          </h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-gray-700 leading-relaxed mt-8 md:mt-0">
            <p className="mb-4">
              <span className="font-bold text-xl">RISE PARTNERS</span>는 한국과
              싱가폴, 캐나다를 거점으로 하는 비즈니스 컨설팅회사입니다. 글로벌
              비즈니스에 관한 다양한 컨설팅 서비스를 제공하고 있습니다.
            </p>
            <p className="mb-4">
              우리는 캐나다에서 정착할 다양한 노하우를 활용하여, 한국에서
              캐나다로 진출하고자 하는 고객을 위한 모든 지원 서비스를 준비하고
              있습니다.
            </p>
            <p className="mb-4">
              우리는 한국의 우수한 기업들을 더 거대한 자본력으로 진입할 수
              있도록 돕고 있습니다. 특히, 캐나다로 진출할 수 있는 기회를
              제공하는데 집중하고 있습니다. 이는 전세계에서 가장 거대한
              자본시장은 미국으로 가는 첫걸음이기도 합니다.
            </p>
            <p className="mb-4">
              우리는 다양한 분야의 전문가들을 활용하여, 폭넓은 인사이트를
              바탕으로 글로벌 시장의 새로운 가치를 창출하는 데 기여하고
              있습니다.
            </p>
            <p className="mb-4">
              기술 스타트업부터 다국적 기업에 이르기까지 다양한 산업 분야에 걸쳐
              고객 기반을 두고 우리는 글로벌 시장의 고유한 과제를 이해하고
              있습니다.
            </p>
            <p>
              캐나다 시장의 잠재력, 비즈니스 모델에 대한 경우{" "}
              <span className="font-bold">RISE PARTNERS</span>는 글로벌
              비즈니스의 성공이 복잡성을 이해하는 새로운 도전을 하는데 있어 가장
              믿을 수 있는 파트너입니다.
            </p>
            <Link href="/about-us">
              <div className="mt-6 bg-rpBlue hover:bg-rpOrange text-white py-2 px-6 rounded-md inline-flex items-center space-x-2 cursor-pointer">
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
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/about-company.png"
              alt="About Company"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
