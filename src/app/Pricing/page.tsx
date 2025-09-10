import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Title from "@/components/ui/title";
function Pricing() {
  return (
    <section className="bg-section text-text font-vazirmatn py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* عنوان */}
        <Title>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-text">
          لیست قیمت محصولات کناف شرکت <span className=" text-primary ">طاق</span>
        </h1>
        </Title>

        {/* توضیح */}
        <p className="text-base md:text-lg text-center text-text/80">
          توجه: قیمت‌ها ممکن است بر اساس نوسانات بازار تغییر کنند. برای دریافت قیمت
          نهایی و مشاوره با کارشناسان ما، لطفاً با ما تماس بگیرید.
        </p>

        {/* کارت تماس */}
        <div className="bg-bg p-6 rounded-xl shadow-border flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-text">
              <Phone className="w-5 h-5" />
              <span> <a
    href="tel:09132958103"
    className="font-semibold pr-2 text-foreground text-lg hover:text-primary transition-colors"
  >
    09132958103
  </a> - دکتر امیر آزاد (مدیرعامل)</span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <Mail className="w-5 h-5" />
              <span>Amirazadavar@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <MapPin className="w-5 h-5" />
              <span>کرمان، بلوارجمهوری اسلامی، روبروی هوشنگ مرادی، ساختمان یاقوت، طبقه سوم</span>
            </div>
          </div>
        </div>

        {/* چرا شرکت طاق */}
        <div className="bg-bg p-6 rounded-xl shadow-border space-y-4">
          <h2 className="text-2xl font-semibold text-primary">چرا شرکت طاق؟</h2>
          <ul className="list-disc list-inside space-y-2 text-text/90">
            <li>
              <strong>کیفیت برتر:</strong> استفاده از مواد اولیه باکیفیت برای تضمین دوام و زیبایی محصولات.
            </li>
            <li>
              <strong>قیمت رقابتی:</strong> ارائه قیمت‌های مناسب و رقابتی در بازار.
            </li>
            <li>
              <strong>پشتیبانی حرفه‌ای:</strong> تیم پشتیبانی ما همواره آماده پاسخگویی به سوالات و نیازهای شماست.
            </li>
            <li>
              <strong>تحویل سریع:</strong> ارسال سریع محصولات به سراسر کشور.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
