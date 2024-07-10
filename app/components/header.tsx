import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header flex h-16 text-white justify-between items-center p-6 fixed w-full">
      <div>
        <Image
          src="/logo_transparent.png"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <div className="flex justify-around w-full">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
