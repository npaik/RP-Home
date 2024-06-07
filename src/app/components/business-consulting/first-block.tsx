"use client";
import Image from "next/image";

export default function FirstBlock() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-1">
            <Image
              src="/business-consulting-1.png"
              alt="Business Consulting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="order-2 md:order-2 text-left text-gray-700 leading-relaxed">
            <div className="mb-8 flex items-start bg-white py-10 px-10">
              <span className="inline-block w-6 h-6 bg-blue-900 text-white rounded-full mr-4 flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  우리는 고객의 요구에 귀를 기울입니다.
                </h3>
                <p className="text-gray-700">
                  라이즈파트너스는 고객이 원하는 것을 깊이 공감하고 업무를
                  착수하는 것을 가장 중요하게 생각합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white py-10 px-10">
              <span className="inline-block w-6 h-6 bg-blue-900 text-white rounded-full mr-4 flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  고객에 맞는 컨설팅을 제안합니다.
                </h3>
                <p className="text-gray-700">
                  라이즈파트너스가 쌓아온 노하우를 고객에게 아낌없이 전달합니다.
                  고객은 항상 최선의 결정을 할 수 있어야 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
