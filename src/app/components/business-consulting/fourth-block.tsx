"use client";

export default function FourthBlock() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t">
        <h2 className="text-center text-3xl font-bold mb-8 pt-20">
          Why This Service Is Important to Grow Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <span className="inline-block w-6 h-6 bg-blue-900 text-white rounded-full mr-4 flex-shrink-0">
              &nbsp;✓
            </span>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                글로벌 전문가의 노하우를 제공합니다.
              </h3>
              <p className="text-gray-700">
                기술 스타트업부터 다국적 기업에 이르기까지 다양한 고객 기반을
                통해 우리 는 글로벌 시장의 고유한 과제를 이해하고 있습니다.
                광범위한 국제 파트너 네 트워크와 결합된 우리의 접근 방식은 실제
                결과를 도출하는 실행 가능한 전략 을 제공합니다.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <span className="inline-block w-6 h-6 bg-blue-900 text-white rounded-full mr-4 flex-shrink-0">
              &nbsp;✓
            </span>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                다양한 산업군의 인사이트를 공유합니다.
              </h3>
              <p className="text-gray-700 pb-12">
                라이즈파트너스는 다양한 산업 분야의 전문역량을 국한으로
                확보하여, 폭넓 은 인사이트를 바탕으로 글로벌시장의 새로운 가치
                창출을 만들어 가고 있습 니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
