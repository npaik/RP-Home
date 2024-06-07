"use client";

export default function FirstBlock() {
  return (
    <div className="bg-gray-100 text-center mt-10">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-700 leading-relaxed mb-8 md:mb-0 text-left">
            <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
              캐나다 상장 컨설팅
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              글로벌 공개 기업
              <br />
              이제 꿈이 아닙니다.
            </h1>
          </div>
          <div className="text-gray-700 leading-relaxed mb-8 md:mb-0 text-left">
            <h3 className="text-xl font-bold mb-4">
              캐나다 주식 시장 진출, 스타트업도 가능합니다.
            </h3>
            <p className="mb-4">
              캐나다 주식시장에는 SPAC (Special Purpose Acquisition Company)와
              유사한 개념인 CPC (Capital Pool Companies)가 있습니다.
              <br />
              그것은 비상장 회사들과 합병하여 캐나다의 주식 시장에 상장될 수
              있는 기회를 제공하는 구조입니다.
              <br /> 해외에서는 이미 CPC 프로그램이 주목받고 있으며, 많은 비상장
              기업들이 이 경로를 통해 상장을 진행하고 있습니다. <br />
              CPC 프로그램은 캐나다 증권 거래소인 TSX Venture Exchange의 지원
              하에 계속 발전하고 있으며, 이 시장은 작은 규모의 기업들이 자금을
              조달하고 성장할 수 있는 플랫폼으로 자리 잡고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
