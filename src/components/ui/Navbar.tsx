"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header className="h-20 bg-white dark:bg-gray-900 px-6  flex items-center">
        <Link href="/" className="">
          JM
        </Link>
        <nav className="h-20 w-full">
          <ul className="h-20 w-full flex justify-end gap-3 items-center">
            <li className="">
              <Link href="/aboutme" className="hidden md:block hover:text-slate-500">Chi sono</Link>
            </li>
            <li className="">
              <Link href="/experiences" className="hidden md:block hover:text-slate-500">Esperienze</Link>
            </li>
            <li className="">
              <Link href="/projects" className="hidden md:block hover:text-slate-500">Progetti</Link>
            </li>
            <li className="">
              <Link href="/contacts" className="hidden md:block hover:text-slate-500">Contatti</Link>
            </li>
            <li className="">
              {/* Pulsante Dark Mode */}
              <ThemeSwitcher />
            </li>
            <li className="">
              {/* Pulsante Menu */}
              <button
                onClick={() => setOpenMenu(true)}
                className="block md:hidden"
              >
                <Menu/>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Drawer menu */}
      <div
        className={`block md:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-end items-center h-20">
          <button
            onClick={() => setOpenMenu(false)}
            className="text-gray-400 text-3xl hover:text-white"
          >
            <X/>
          </button>
        </div>
        <nav className="flex flex-col gap-10 justify-center items-center p-4 space-y-2 h-full">
          <Link href="/aboutme" className="hover:text-slate-500 text-5xl" onClick={() => setOpenMenu(false)}>Chi sono</Link>
          <Link href="/experiences" className="hover:text-slate-500 text-5xl" onClick={() => setOpenMenu(false)}>Esperienze</Link>
          <Link href="/projects" className="hover:text-slate-500 text-5xl" onClick={() => setOpenMenu(false)}>Progetti</Link>
          <Link href="/contacts" className="hover:text-slate-500 text-5xl" onClick={() => setOpenMenu(false)}>Contatti</Link>
          <Link href="" className=""></Link>
          <Link href="" className=""></Link>
          <Link href="" className=""></Link>
          <Link href="" className=""></Link>
        </nav>
      </div>
    </>
  );
}
