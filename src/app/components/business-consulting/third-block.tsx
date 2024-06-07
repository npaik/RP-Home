"use client";
import Image from "next/image";
import { useState } from "react";

export default function ThirdBlock() {
  const [activeTab, setActiveTab] = useState("industry");

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold mb-4">What We Do</h2>
        <h1 className="text-center text-3xl font-bold mb-12">
          We Provide Amazing Solution to Build Your Business
        </h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 ${
              activeTab === "industry"
                ? "bg-blue-900 text-white"
                : "bg-gray-300"
            } rounded-l-lg`}
            onClick={() => setActiveTab("industry")}
          >
            산업 전문가
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "global" ? "bg-blue-900 text-white" : "bg-gray-300"
            } rounded-r-lg`}
            onClick={() => setActiveTab("global")}
          >
            글로벌 진출
          </button>
        </div>

        {activeTab === "industry" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/business-consulting-2.png"
                alt="Business Consulting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="text-left text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4">
                다양한 업계의 전문가들이 모여 진정한 통찰력을 만듭니다.
              </h3>
              <p className="mb-4">
                라이즈파트너스는 다양한 산업군에 걸친 통찰력 확보를 위해 내부에
                다채로운 전문가들을 갖추고 있습니다. 이들은 지속적인 정보 교류를
                통해 국제정세, 신기술, 시장 동향에 대한 예민한 통찰력을
                공유합니다.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>20년 경력의 금융 전문가</li>
                <li>숙련된 IT 전문가 그룹</li>
                <li>방송, 미디어, 컨텐츠</li>
                <li>반도체, 전자공학 전문가</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "global" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/business-consulting-bg-map.png"
                alt="Global Expansion"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="text-left text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4">
                고객의 역량을 글로벌 무대로 확장합니다.
              </h3>
              <p className="mb-4">
                라이즈파트너스는 벤쿠버, 싱가폴의 해외 거점을 운영하며,
                고객사들의 글로벌 시장의 진출 기회를 제공하고 있습니다. 본사와
                해외 거점 간 유기적인 네트워크를 기반으로 급변하는 글로벌 금융
                환경에 빠르게 대응하며, 다양한 기회를 모색하고 가치를 창출하고
                있습니다.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>서울, 벤쿠버 등 주요 오피스</li>
                <li>북미 전반에 긴밀한 네트워크</li>
                <li>글로벌 전문 역량 보유</li>
                <li>동남아시아 사업 진출</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
