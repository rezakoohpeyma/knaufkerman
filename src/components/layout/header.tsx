"use client";

import { Search, Menu, X, SunMoon, Instagram  } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";
import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";
import { useTheme } from "@/provides/theme-provider";
import Modal from "../ui/modal";
import Input from "../ui/input";
import { menuItem } from "@/data/menu";
import Link from "next/link";

export default function Header() {
  const isMobile = useMobile(768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const submitHandler = () => {};
  return (
    <header className="w-full bg-section px-4 py-3 text-text transition-colors">
      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pt-4 border-t border-border">
            <nav className="space-y-2">
             {menuItem.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.math}
                  className="block px-4 py-3 hover:text-primary hover:bg-section rounded-md font-vazirmatn transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Right side */}
        <div className="flex items-center gap-4">
      

          <div className="flex items-center gap-3">
            <div className="text-right">
              <Link href="/">
              <Image
                src="/images/logo/full-logo.png"
                width={200}
                height={200}
                alt="لوگو"
                />
                </Link>
            </div>
          </div>
        </div>

            {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-bg rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-text" />
              ) : (
                <Menu className="w-6 h-6 text-text" />
              )}
            </button>
          )}
        {/* Center - Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
         {menuItem.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.math}
                  className="block px-4 py-3 hover:text-primary hover:bg-section rounded-md font-vazirmatn transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
          </nav>
        )}

        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 hover:bg-bg rounded-md transition-colors"
          >
            <SunMoon className="w-5 h-5 text-text" />
          </button>
          <button className="p-2 hover:bg-bg rounded-md transition-colors">
            <Search className="w-5 h-5 text-text" />
          </button>
          <Button onClick={() => setOpen(true)}>تماس با ما</Button>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex gap-50">

          <div>
            <h3>ثبت مشاوره رایگان </h3>
            {/* <form onSubmit={submitHandler}>
              <label>نام</label>
              <Input type="text" placeholder="رضا " />
              <label>نام و نام خانوادگی</label>
              <Input type="text" placeholder="کوهپیما" />
              <label>شماره</label>
              <Input type="text" placeholder="09162726731" />
              <Button>ثبت درخواست</Button>
            </form> */}
          </div>

          <div>
            <h2>شرکت فنی مهندسی طاق</h2>
            <p>کرمان، بلوارجمهوری اسلامی، روبروی بلوار هوشنگ مرادی، ساختمان یاقوت، طبقه سوم</p>
            <p>موبایل: 09132958103 دکتر امیر آزاد (مدیرعامل)</p>
            {/* <Instagram />
            <Instagram /> */}
          </div>
        </div>
      </Modal>
    </header>
  );
}
