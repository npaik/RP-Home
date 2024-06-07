"use client";
import Image from "next/image";

//? 해야할일
//~ 스페이싱
//~ 폰트

export default function FirstBlock() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/contact-1.png"
            alt="Contact"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-4">
          <p className="text-2xl font-semibold">
            언제나 고객에게 귀 기울이겠습니다.
            <br />
            라이즈파트너스는 항상 고객과 함께 하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
