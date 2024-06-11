"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/RP-light.png";
import Dropdown from "./components/dropdown";
import phoneIcon from "../../public/phoneicon.png";

export default function NavBar({ className }: { className?: string }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <nav
      className={`container mx-auto flex items-center justify-between p-4 ${className}`}
    >
      <Link href="/">
        <Image src={logo} alt="Rise Partners Logo" width={150} height={50} />
      </Link>
      <div className="hidden md:hidden lg:hidden xl:flex items-center space-x-auto">
        <Link
          className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
          href="/about-us"
        >
          회사소개
        </Link>
        <Link
          className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
          href="/corporation"
        >
          법인서비스
        </Link>
        <Link
          className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
          href="/support"
        >
          지원서비스
        </Link>
        <Link
          className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
          href="/business-consulting"
        >
          비지니스컨설팅
        </Link>
        <Link
          className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
          href="/corporation-consulting"
        >
          상장컨설팅
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex lg:flex xl:flex items-center space-x-2 px-2">
          <Image src={phoneIcon} alt="Phone Icon" width={35} height={35} />
          <div className="text-gray-600 pl-2">
            Make A Call
            <br />
            <a href="tel:604-609-5390" className="hover:underline">
              604-609-5390
            </a>
          </div>
        </div>
        <Link
          className="hidden md:flex text-lg py-2 px-4 bg-rpBlue text-white rounded-md hover:bg-rpOrange transition duration-300 items-center space-x-2"
          href="/contact"
        >
          <span>상담신청</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
        <button onClick={openModal} className="p-2 pl-10">
          <Dropdown />
        </button>
      </div>
      {modalIsOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50"
            aria-hidden="true"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-y-0 right-0 w-3/4 md:w-1/5 bg-white p-6 shadow-lg z-50 overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex md:flex xl:hidden lg:flex flex-col items-start space-y-4 mt-10">
              <Link href="/" onClick={closeModal}>
                <Image
                  src={logo}
                  alt="Rise Partners Logo"
                  width={150}
                  height={50}
                />
              </Link>
              <Link
                className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
                href="/about-us"
                onClick={closeModal}
              >
                회사소개
              </Link>
              <Link
                className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
                href="/corporation"
                onClick={closeModal}
              >
                법인서비스
              </Link>
              <Link
                className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
                href="/support"
                onClick={closeModal}
              >
                지원서비스
              </Link>
              <Link
                className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
                href="/business-consulting"
                onClick={closeModal}
              >
                비지니스컨설팅
              </Link>
              <Link
                className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
                href="/corporation-consulting"
                onClick={closeModal}
              >
                상장컨설팅
              </Link>
              <Link
                className="text-lg inline-block py-2 px-4 hover:font-bold transition duration-300"
                href="/contact"
                onClick={closeModal}
              >
                상담신청
              </Link>
            </div>
            <div className="hidden md:hidden lg:hidden xl:flex flex-col items-start space-y-4 mt-10">
              <Image
                src={logo}
                alt="Rise Partners Logo"
                width={150}
                height={50}
              />
              <h2 className="text-xl font-semibold">Who We Are</h2>
              <p className="text-gray-500">
                With every opportunity, there&apos;s a chance to rise. Let us be
                your partner in that ascent.
              </p>
              <div className="mt-4">
                <h3 className="text-gray-500">Location</h3>
                <p>5th Floor, 409 Granville St, Vancouver BC V6C 1T2</p>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500">Email Address</h3>
                <p>contact@risepartners.ca</p>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500">Make A Call</h3>
                <p>
                  <a href="tel:604-609-5390" className="hover:underline">
                    604-609-5390
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
