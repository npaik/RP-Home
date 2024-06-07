"use client";
import Image from "next/image";

//? 해야할일
//~ 스페이싱
//~ 폰트

export default function SecondBlock() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-left">
              Support Services & Agency Services & Representative Services
            </h2>
          </div>
          <div>
            <h2 className="text-gray-600 mb-6 text-left">
              캐나다에서 대행할 수 있는 가능한 다양한 지원서비스를 제공합니다.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="list-none space-y-4 text-left">
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>이민 지원 서비스</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>이사 지원 서비스</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>유학 지원 서비스</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>비자발급, 영주권, 시민권</span>
                </li>
              </ul>
              <ul className="list-none space-y-4 text-left">
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>은행 업무 대행</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>우편물 관리 대행</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>배송 대행</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mr-2"></span>
                  <span>비즈니스 미팅 대행</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
          <Image
            src="/support-2.png"
            alt="Service Image 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/support-3.png"
            alt="Service Image 2"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/support-4.png"
            alt="Service Image 3"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/support-5.png"
            alt="Service Image 4"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/support-6.png"
            alt="Service Image 5"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/support-7.png"
            alt="Service Image 6"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
