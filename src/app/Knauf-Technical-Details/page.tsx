"use client"

import { useState } from "react"
import { sections } from "@/data/DWGTechnicalDetails"
import { FileText, Download } from "lucide-react"

export default function KnaufTechnicalDetails() {
  const [activeTab, setActiveTab] = useState(sections[0].key)

  const activeSection = sections.find((s) => s.key === activeTab)

  return (
    <div className="min-h-screen  bg-bg font-vazirmatn">
      <div className="max-w-7xl flex flex-col gap-20  mx-auto p-6">
        
        {/* Header */}
        <div className="  ps-4 border-r-5 border-r border-sky-500">
          <h1 className="text-3xl font-bold text-second mb-2">دیتیل های فنی DWG</h1>
          <p className="text-second text-lg">مجموعه کامل فایل‌های فنی و نقشه‌های ساختمانی</p>
        </div>

<div className="flex flex-col items-center">

        {/* Tabs */}
        <div className="bg-section  max-w-7xl rounded-xl shadow-border mb-8 overflow-hidden">
          <div className="flex border-b border-border overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveTab(section.key)}
                className={`px-6 py-4 whitespace-nowrap font-medium transition-all duration-300 relative ${
                  activeTab === section.key
                    ? "text-primary  border-b-2 border-primary"
                    : "text-second hover:text-text hover:bg-overlay/50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-section w-full max-w-7xl rounded-xl shadow-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-right">
              <thead>
                <tr className="bg-overlay border-b border-border">
                  <th className="px-6 py-4 text-text font-semibold text-sm">ردیف</th>
                  <th className="px-6 py-4 text-text font-semibold text-sm">توضیح فایل</th>
                  <th className="px-6 py-4 text-text font-semibold text-sm text-center">فایل DWG</th>
                  <th className="px-6 py-4 text-text font-semibold text-sm text-center">فایل PDF</th>
                </tr>
              </thead>
              <tbody>
                {activeSection?.items.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-border hover:bg-overlay/30 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-tranparent" : "bg-bg"
                    }`}
                  >
                    <td className="px-6 py-4 text-text font-medium">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold">
                        {item.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text">
                      <div className="font-medium">{item.title}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={item.dwgUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm shadow-sm"
                      >
                        <FileText size={16} />
                        دانلود DWG
                        <span className="text-xs opacity-80">({item.code})</span>
                      </a>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={item.pdfUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-medium text-sm"
                      >
                        <Download size={16} />
                        دانلود PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


     
        </div>
      </div>
    </div>
  )
}
