"use client"; // Client Component for interactivity

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between items-center sm:px-20">
      <Link
        href="/"
        className="text-lg sm:text-2xl font-bold cursor-pointer hover:text-slate-200 hover:opacity-60"
      >
        Mr. Salman Vai
      </Link>

       {/* Mobile Menu Button  */}
      <button
        className="sm:hidden block text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`sm:flex sm:gap-6 items-center ${
          isOpen ? "block" : "hidden"
        } absolute sm:static top-16 left-0 w-full sm:w-auto bg-slate-800 sm:bg-transparent text-center sm:text-left`}
      >
        <li className="py-2 sm:py-0">
          <Link
            className="text-xs sm:text-base bg-slate-900 px-3 py-1.5 rounded font-semibold text-slate-200 hover:opacity-60 inline-block"
            href="/lazy-loading"
          >
            Lazy Optimized
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar


