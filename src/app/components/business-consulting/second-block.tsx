"use client";

export default function SecondBlock() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-rpBlue font-semibold tracking-wide uppercase mb-2">
          Working Process
        </h2>
        <h1 className="text-3xl font-bold mb-12">
          Learn About Our Working Process
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hoverEffect bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-rpBlue text-white rounded-full flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2">고객요구분석</h3>
            <p className="text-gray-600">
              고객이 원하는 것을 정확히 이해하고 각 담당자는 해당 사항을 정리 각
              부서에 전달 공유합니다.
            </p>
          </div>
          <div className="hoverEffect bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-rpBlue text-white rounded-full flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold mb-2">현지상황분석</h3>
            <p className="text-gray-600">
              고객의 요구에 맞는 사항을 현지에 맞게 대변 분석합니다. 더 유리한
              정보가 있는지 인사이트를 확보합니다.
            </p>
          </div>
          <div className="hoverEffect bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-rpBlue text-white rounded-full flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold mb-2">전략 및 계획 수립</h3>
            <p className="text-gray-600">
              분석된 자료를 완벽히 이해한 전문가 팀은 전략을 수립합니다. 전략이
              정해지면 전략에 맞는 계획을 정하고 검토합니다.
            </p>
          </div>
          <div className="hoverEffect bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-rpBlue text-white rounded-full flex items-center justify-center mb-4">
              04
            </div>
            <h3 className="text-xl font-semibold mb-2">고객에 제공</h3>
            <p className="text-gray-600">
              고객에게 준비된 자료와 전략 및 계획을 전달하고 함께 논의합니다.
              고객에게 최적화된 맞춤 계획을 정하고 유리한 방법을 찾습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
