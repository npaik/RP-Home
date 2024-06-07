"use client";
import Image from "next/image";

//? 해야할일
//~ 스페이싱
//~ 폰트

export default function FirstBlock() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1 flex justify-center">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/support-1.png"
              alt="Support Services Image"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-blue-900 text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-1">Success Rate</h3>
              <p className="text-2xl font-bold">95%</p>
            </div>
          </div>
        </div>
        <div className="order-2 md:order-2 text-gray-700 leading-relaxed">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase mb-4">
            Support Services
          </h2>
          <h1 className="text-4xl font-bold mb-6">
            캐나다에서 필요한 모든것
            <br />
            라이즈파트너스의 지원서비스
          </h1>
          <p className="mb-6 text-gray-600 leading-loose">
            라이즈파트너스에서는 캐나다 생활에 필요한 다양한 서비스를
            제공합니다. 비즈니스 뿐만 아니라, 이민, 유학, 여행 상담 등 개인적인
            부분도 도와드립니다. 캐나다에서의 새 출발이든, 교육이나 일상 생활에
            관한 것이든, 우리 전문가들이 친절하고 알기 쉽게 안내해 드릴 수
            있습니다. 문화적 차이를 이해하고, 여러분의 캐나다 생활이 편안하고
            성공적이길 바라며, 언제든지 도움을 제공하겠습니다.
          </p>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              {/* <Image
                src="/icon-implement.png"
                alt="Helping to implement your ideas"
                width={50}
                height={50}
              /> */}
              <p className="mt-2 text-sm font-medium text-gray-700">
                Helping to implement your ideas
              </p>
            </div>
            <div className="flex flex-col items-center">
              {/* <Image
                src="/icon-meetings.png"
                alt="Enabling key meetings"
                width={50}
                height={50}
              /> */}
              <p className="mt-2 text-sm font-medium text-gray-700">
                Enabling key meetings
              </p>
            </div>
            <div className="flex flex-col items-center">
              {/* <Image
                src="/icon-recommendations.png"
                alt="Providing quality recommendations"
                width={50}
                height={50}
              /> */}
              <p className="mt-2 text-sm font-medium text-gray-600">
                Providing quality recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
