"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingBag, MdOutlinePeople } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import { TbCirclesRelation } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";

import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/id/" || pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navbarStyle = isHome
    ? scrolled
      ? "bg-[#f6faf5] text-emerald-950"
      : "bg text-gray-100"
    : "bg-[#f6faf5] text-emerald-950";

  const logoStyle = isHome ? (scrolled ? "" : "bg-white rounded-full") : "";

  return (
    <>
      <div
        className={`fixed ${
          isHome && "animate-onlyFade"
        } top-0 right-0 left-0 z-30 flex justify-between items-center md:gap-20 py-4 px-4 md:px-10 lg:px-20 transition-all duration-300 ${navbarStyle}`}
      >
        <Link href={"/id/"}>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <img
              src="/assets/porlucoffee-logo.png"
              alt="PorluCoffee Logo"
              className={`w-9 h-9 md:w-12 md:h-12 ${logoStyle}`}
              loading="lazy"
            />
            <img
              src={
                isHome
                  ? scrolled
                    ? "/assets/porlucoffee-text-logo.png"
                    : "/assets/porlucoffee-text-logo-white.png"
                  : "/assets/porlucoffee-text-logo.png"
              }
              alt="PorluCoffe Text Logo"
              className={`w-12 h-12 object-contain md:w-16 md:h-13 `}
              loading="lazy"
            />
          </div>
        </Link>

        <nav className="hidden md:flex justify-center items-center gap-6 font-jura">
          <Link
            href="/id/"
            className="font-medium flex items-center gap-1 hover:underline lg:text-lg"
          >
            <span>Beranda</span>
          </Link>
          <Link
            href="/id/produk/"
            className="font-medium flex items-center gap-1 hover:underline lg:text-lg"
          >
            <span>Produk</span>
          </Link>
          <Link
            href="/id/tentang-kami/"
            className="font-medium flex items-center gap-1 hover:underline lg:text-lg"
          >
            <span>Tentang Kami</span>
          </Link>
          <Link
            href="/id/kolaborasi/"
            className="font-medium flex items-center gap-1 hover:underline lg:text-lg"
          >
            <span>Kolaborasi</span>
          </Link>
          <Link
            href="/id/kontak/"
            className="font-medium flex items-center gap-1 hover:underline lg:text-lg"
          >
            <span>Kontak</span>
          </Link>
          <LanguageSelector />
        </nav>

        <div className="flex md:hidden items-center gap-5">
          <LanguageSelector />
          <button className="text-2xl" onClick={() => setIsSidebarOpen(true)}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[65%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold font-raleway">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
            <HiOutlineXMark />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-base font-jura">
          <Link
            href="/id/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <AiOutlineHome />
            <span>Beranda</span>
          </Link>
          <Link
            href="/id/produk/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <MdOutlineShoppingBag />
            <span>Produk</span>
          </Link>
          <Link
            href="/id/tentang-kami/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <MdOutlinePeople />
            <span>Tentang Kami</span>
          </Link>
          <Link
            href="/id/kolaborasi/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <TbCirclesRelation />
            <span>Kolaborasi</span>
          </Link>
          <Link
            href="/id/kontak/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <MdConnectWithoutContact />
            <span>Kontak</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
