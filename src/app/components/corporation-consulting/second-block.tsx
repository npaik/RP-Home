"use client";

import Image from "next/image";
import Link from "next/link";

export default function SecondBlock() {
  return (
    <div className="relative bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white leading-relaxed">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            상장 컨설팅
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            라이즈홀딩스의 전문가들을 만나보세요.
          </h1>
          <p className="mb-4">
            20년 이상의 금융전문가와 다양한 산업의 숙련된 글로벌 컨설턴트들이
            당신의 비즈니스를 기다립니다.
          </p>
          <Link href="https://riseholdings.ca/">
            <div className="mt-4 cursor-pointer w-40">
              <Image
                src="/riseholdings.png"
                alt="Rise Holdings"
                width={150}
                height={75}
                className="w-full h-auto"
              />
            </div>
          </Link>
        </div>
        <div className="relative w-full h-64 md:h-auto flex justify-center">
          <Image
            src="/business-consulting.png"
            alt="Business Consulting"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
