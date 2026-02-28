"use client"; 

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button, ContainerFluid } from "@/app/components/ui";
import Image from "next/image";
import LogoBlack from "@/public/images/website/logo-black.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Platform", "Pricing", "Blog", "About"];

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <ContainerFluid className="h-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="z-50 flex items-center">
          <span className="font-serif text-3xl font-medium tracking-tight text-[#0B1D1D]">
            Iriscale
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-camera-plain-regular text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary">Login</Button>
            <Button variant="accent">Schedule Demo</Button>
          </div>

          {/* Mobile Hamburger/Close Icon */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 text-[#0B1D1D] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-[#0B1D1D] hover:opacity-70 transition-opacity"
              >
                {item}
              </Link>
            ))}
            
            <hr className="w-full border-slate-200" />
            
            <div className="flex flex-col w-full gap-4 mt-4">
              <Button variant="secondary" className="w-full text-lg py-6">
                Login
              </Button>
              <Button variant="accent" className="w-full text-lg py-6">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </header>
  );
}