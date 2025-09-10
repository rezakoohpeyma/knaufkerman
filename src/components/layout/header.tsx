"use client";

import { Search, Menu, X, SunMoon, Instagram } from "lucide-react";
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

  // ✅ فرم state
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ مدیریت تغییر Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("سلام ", process.env.EMAIL_PASS);
  };

  // ✅ مدیریت submit فرم
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(
          data.errors ? "ورودی‌ها نامعتبرند ❌" : "مشکل در ارسال سرور"
        );
      } else {
        setMessage("✅ درخواست شما با موفقیت ثبت شد");
        setForm({ name: "", lastName: "", phone: "" });
      }
    } catch (err) {
      setMessage("❌ خطای اتصال به سرور");
    } finally {
      setLoading(false);
    }
  };

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

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex w-full gap-5  flex-col md:flex-row  justify-center items-center">
          {/* Form Section */}
          <div className="flex-1 font-vazirmatn bg-card rounded-xl p-6 md:p-8 ">
            <h3 className="text-2xl font-bold mb-6">ثبت مشاوره رایگان</h3>
            <form onSubmit={submitHandler} className="flex flex-col gap-4">
              <label className="text-sm font-medium">نام</label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="رضا"
                label={""}
                type={""}
              />

              <label className="text-sm font-medium">نام و نام خانوادگی</label>
              <Input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="کوهپیما"
                label={""}
                type={""}
              />

              <label className="text-sm font-medium">شماره</label>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="09162726731"
                label={""}
                type={""}
              />

              <Button type="submit" className="mt-4 w-full" disabled={loading}>
                {loading ? "در حال ارسال..." : "ثبت درخواست"}
              </Button>

              {message && (
                <p className="mt-2 text-sm font-medium text-center">
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 font-vazirmatn duration-300">
            <h2 className="text-3xl font-extrabold mb-6 text-foreground">
              شرکت فنی مهندسی طاق
            </h2>

            <p className="mb-3 text-base md:text-lg text-muted-foreground leading-relaxed">
              کرمان، بلوار جمهوری اسلامی، روبروی بلوار هوشنگ مرادی، ساختمان
              یاقوت، طبقه سوم
            </p>

            <p className="mb-5 text-base md:text-lg text-muted-foreground">
              موبایل:
              <a
                href="tel:09132958103"
                className="font-semibold pr-2 text-foreground text-lg hover:text-primary transition-colors"
              >
                09132958103
              </a>
            </p>

            <div className="flex gap-5 mt-6">
              <a
                href="https://instagram.com/knaufkerman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Instagram className="w-7 h-7 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
}
