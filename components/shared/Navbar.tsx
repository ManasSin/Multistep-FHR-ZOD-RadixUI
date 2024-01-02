import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
// import 'vercel.svg'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="mb-4 min-w-screen w-full flex justify-between items-center border py-4">
      <section className="flex flex-grow gap-x-3 px-5 w-full">
        <div>
          {/* <Image
            alt="logo image"
            src={"../../public/vercel.svg"}
            width="40"
            height="40"
          /> */}
          <h1 className="font-bold text-4xl text-sky-600">Invoice</h1>
        </div>
      </section>
      <section className="flex gap-3 px-5">
        <Button variant="default" size="sm">
          <Link href={"/signin"}>Log In</Link>
        </Button>
        <Button variant="outline" size="sm" className="text-black">
          <Link href={"/signup"}>Sign Up</Link>
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
