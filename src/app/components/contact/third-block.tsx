"use client";
import Image from "next/image";

export default function ThirdBlock() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/contact-2.png"
            alt="Customer Support"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto">
            <p className="text-xl font-semibold mb-4">
              <span className="inline-block bg-rpBlue rounded-full w-4 h-4 mr-2"></span>
              우리는 고객의 요구에 귀를 기울입니다.
            </p>
            <p className="text-gray-600">
              라이즈파트너스는 고객이 원하는 것을 깊이 공감하고 업무를 착수하는
              것을 가장 중요하게 생각합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-xl font-semibold mb-4">
              <span className="inline-block bg-rpBlue rounded-full w-4 h-4 mr-2"></span>
              고객에 맞는 컨설팅을 제안합니다.
            </p>
            <p className="text-gray-600">
              라이즈파트너스가 쌓아온 노하우를 고객에게 아낌없이 전달합니다.
              고객은 항상 최선의 결정을 할 수 있어야 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
