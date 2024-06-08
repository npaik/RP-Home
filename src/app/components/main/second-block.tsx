"use client";
import Link from "next/link";

export default function SecondBlock() {
  return (
    <div className="relative z-10 flex justify-center bg-black py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        <div className="bg-white p-6 rounded shadow-lg flex flex-col justify-between text-center">
          <div>
            <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              캐나다에 정착하시고 싶으세요?
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-sm md:text-base lg:text-lg">
              캐나다는 세계 최고의 교육환경과 건강한 생활 환경을 갖춘 다양한
              기회가 있는 기회의 땅입니다. 라이즈파트너스의 도움을 받으면
              캐나다에서 새로운 여정을 시작하실 수 있습니다.
            </p>
          </div>
          <div className="text-center mt-4">
            <Link href="/support">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-4 sm:h-4"
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
        <div className="bg-white p-6 rounded shadow-lg flex flex-col justify-between text-center">
          <div>
            <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              더 큰 비즈니스 기회를 만나세요.
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-sm md:text-base lg:text-lg">
              라이즈파트너스는 고객의 비즈니스가 국내시장을 넘어 성공적인 글로벌
              시장 진출을 할 수 있도록 돕습니다. 이를 통해 기업의 기술 잠재력을
              극대화 시키며, 국제 경쟁력을 확보하게 됩니다.
            </p>
          </div>
          <div className="text-center mt-4">
            <Link href="/business-consulting">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-4 sm:h-4"
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
        <div className="bg-white p-6 rounded shadow-lg flex flex-col justify-between text-center">
          <div>
            <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              북미 주식 시장으로의 도전
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-sm md:text-base lg:text-lg">
              글로벌 주식 시장에 상장하는 것, 더 이상 미지의 영역이 아닙니다.
              스타트업도 도전할 수 있는 기회를 라이즈파트너스가 지원합니다.
            </p>
          </div>
          <div className="text-center mt-4">
            <Link href="/corporation-consulting">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-4 sm:h-4"
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
      </div>
    </div>
  );
}
