"use client";
import Image from "next/image";

export default function FirstBlock() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="order-2 md:order-1 text-gray-600 leading-relaxed mb-8 md:mb-0">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase mb-4">
            About Company
          </h2>
          <h1 className="text-4xl">반갑습니다.</h1>
          <h1 className="text-4xl font-bold mb-6">라이즈파트너스입니다.</h1>
          <p className="mb-6 text-gray-600 leading-loose">
            안녕하십니까, 꿈과 희망을 품고 캐나다 진출을 꿈꾸시는 모든 분들께
            따뜻한 인사를 전합니다. <br />
            <br />
            캐나다는 다양한 문화와 기회가 어우러진, 모든 사람들에게 열린
            땅입니다. <br />
            <br />
            단순한 삶의 터전을 넘어, 꿈꾸는 미래를 실현할 수 있는 무한한
            가능성을 제공하는 곳입니다. <br />
            <br />
            이글을 읽고 계신 분들은 중요한 결정인 캐나다 진출을 고민하며 많은
            준비와 연구를 하고 계실 것이라 생각됩니다. <br />
            <br />
            라이즈파트너스는 그런 고객의 노력을 존중하고 공감하며, 새로운 시작을
            진심으로 환영합니다. <br />
            <br />
            이곳에 오시면 다양한 지원 체계가 고객을 맞이하여 안정적으로 정착할
            수 있도록 도울 것입니다. <br />
            <br />
            폭넓은 자연환경과 세계적 수준의 교육 시스템, 건강한 생활 환경과
            함께, 여러분의 꿈과 야망이 현실이 될 수 있는 모든 기회가 여기
            캐나다에 있습니다. 우리는 고객이 새로운 환경에 잘 적응하고, 자신의
            이야기를 펼쳐갈 수 있도록 돕기 위해 최선을 다할 것입니다. <br />
            <br />
            캐나다 진출을 결정하는 것은 여정의 시작에 불과합니다. 이 곳에서의
            삶은 여러분이 그려온 꿈들로 가득 차 있으며, 우리는 그 꿈들이
            현실화되는 것을 기대하며 여러분을 기다립니다. 캐나다에서 새로운
            챕터가 펼쳐질 그날을 기대합니다.
            <br />
            <br /> 감사합니다.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li className="mb-2">고객의 일에 집중할 수 있도록 돕습니다.</li>
            <li>합리적인 가격으로 도움을 받으세요.</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 w-full mt-8 md:mt-0">
          <div className="relative w-full h-64 lg:h-auto lg:mt-20 lg:pt-20">
            <Image
              src="/about-us-1.jpeg"
              alt="About Us Image 1"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="order-3 hidden md:flex justify-center lg:h-auto lg:mt-20 lg:pt-20">
          <div className="bg-white text-gray-600 rounded-lg p-6 shadow-lg max-w-xs text-center">
            <h3 className="text-2xl font-bold mb-2">11+</h3>
            <p className="text-base">Years Of Experience in Consulting</p>
          </div>
        </div>
      </div>
    </div>
  );
}
