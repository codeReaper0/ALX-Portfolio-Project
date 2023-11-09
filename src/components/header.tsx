"use client";

import Link from "next/link";
import {navLinks} from "@/lib/links";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function Header() {
  const pathname = usePathname();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 100);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header
      className={`font-marcellus px-10 py-5 flex justify-between items-center absolute w-full text-white z-20 top-0 ${
        small ? "bg-black/80 backdrop-blur-lg sticky top-0 z-20" : ""
      }`}
    >
      <Link href="/">
        <h1 className="flex flex-col">
          <span className="text-4xl">HOME</span>
          <span className="text-sm"> of Luxury</span>
        </h1>
      </Link>

      <nav>
        <ul className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={
                    isActive
                      ? "border-b border-b-white pb-1"
                      : "hover:border-b hover:border-b-white hover:pb-1 transition-all duration-300 ease-linear"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
