import Image from "next/image";

import FirstBlock from "../components/contact/first-block";
import SecondBlock from "../components/contact/second-block";
import ThirdBlock from "../components/contact/third-block";
import FourthBlock from "../components/contact/fourth-block";

export default function Contact() {
  return (
    <>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
    </>
  );
}
