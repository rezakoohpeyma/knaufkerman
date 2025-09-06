"use client";

import { Search, Menu, X, SunMoon } from "lucide-react";
import Button from "@/components/button";
import { useState } from "react";
import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";
import { useTheme } from "@/provides/theme-provider";

export default function Header() {
  const isMobile = useMobile(768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <header className="w-full bg-section  px-4 py-3 text-text transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Button>تماس با ما</Button>
          <button className="p-2 hover:bg-bg rounded-md transition-colors">
            <Search className="w-5 h-5 text-text" />
          </button>
          <button
            onClick={toggle}
            className="p-2 hover:bg-bg rounded-md transition-colors"
          >
            <SunMoon className="w-5 h-5 text-text" />
          </button>
        </div>

        {/* Center - Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            {["کاری", "پروژه ها", "لیست قیمت", "دیتیل‌های فنی کاف", "کاتالوگ ها"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-primary text-lg font-vazirmatn transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        )}

        {/* Right side */}
        <div className="flex items-center gap-4">
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

          <div className="flex items-center gap-3">
            <div className="text-right">
              <Image
                src="/images/logo/full-logo.png"
                width={200}
                height={200}
                alt="لوگو"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pt-4 border-t border-border">
            <nav className="space-y-2">
              {["کاتالوگ ها", "دیتیل‌های فنی کاف", "لیست قیمت", "پروژه ها", "کاری"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-3 hover:text-primary hover:bg-section rounded-md font-vazirmatn transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
