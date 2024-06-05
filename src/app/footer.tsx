import Link from "next/link";
import Image from "next/image";
import logo from "../../public/RP-dark.png";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`container mx-auto items-center justify-between p-4 ${className}`}
    >
      <Link href="/">
        <Image src={logo} alt="Rise Partners Logo" width={200} height={200} />
      </Link>
      <div className="flex items-center space-x-4 text-gray-400">
        With every opportunity, there&apos;s a chance to rise. <br />
        Let us be your partner in that ascent.
      </div>
      <div className="text-gray-400 p-10">
        Copyright @2024, Rise Partners All Rights Reserved
      </div>
    </footer>
  );
}
