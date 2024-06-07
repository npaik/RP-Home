"use client";
import Image from "next/image";
import Link from "next/link";

export default function FourthBlock() {
  return (
    <div
      className="relative py-16"
      style={{ backgroundImage: "url('/bg-pattern.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-700 leading-relaxed">
            <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase pb-4">
              Get Consultations
            </h2>
            <h1 className="text-4xl mb-4">컨설팅이 필요하신가요?</h1>
            <h1 className="text-4xl font-bold mb-4">컨설턴트를 만나세요.</h1>
            <Link href="/contact">
              <div className="mt-4 bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer w-60">
                <span>Get A Consultation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="relative w-full h-64 md:h-auto flex justify-center">
            <Image
              src="/about-us-3.png"
              alt="About Us Image 3"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
