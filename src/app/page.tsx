"use client";

import { useState, useEffect } from "react";

import Loading from "./loading";
import { Suspense } from "react";

import FirstBlock from "./components/main/first-block";
import SecondBlock from "./components/main/second-block";
import ThirdBlock from "./components/main/third-block";
import FourthBlock from "./components/main/fourth-block";
import FifthBlock from "./components/main/fifth-block";
import SixthBlock from "./components/main/sixth-block";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Suspense fallback={<Loading />}></Suspense>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
    </>
  );
}
