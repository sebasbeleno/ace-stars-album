import React from "react";
import Link from "next/link";
import Logo from "../assets/svg/Logo";

const Navbar = () => {
  return (
    <nav className="text-gray-600 body-font w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/'>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo />
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/getStickers">
            <a className="mr-5 hover:text-gray-900">Obtener Láminas</a>
          </Link>
          <Link href="/myAlbum">
            <a className="mr-5 hover:text-gray-900">Mi Àlbum</a>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
