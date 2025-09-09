import { MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-section h-90 md:h-80 border-t border-border  text-text">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          {/* Persian business information */}
          <div className="text-right text-text text-sm leading-relaxed">
            <p className="font-vazirmatn">
              کرمان، بلوارجمهوری اسلامی، روبروی بازار هوشنگ مردی، ساختمان باقوت،
              طبقه سوم
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-second hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="#"
              className="text-second hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom section with copyright and contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-border">
          {/* Contact information */}
          <div className=" font-vazirmatn text-right text-text text-sm">
            <p>موبایل: ۰۹۱۳۱۹۸۵۱۵۳ دکتر امیر آزاد (مدیرعامل)</p>
          </div>
          {/* Copyright */}
          <div className="text-second text-sm">
            Copyright ۲۰۲۴ TaghCo | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
