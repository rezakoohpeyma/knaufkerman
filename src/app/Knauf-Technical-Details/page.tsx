"use client";

import React, { useState } from "react";
import { sections } from "@/data/DWGTechnicalDetails";
import { FileText } from "lucide-react";

export default function KnaufTechnicalDetails() {
  const [activeTab, setActiveTab] = useState(sections[0].key);

  const activeSection = sections.find((s) => s.key === activeTab);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">دیتیل های فنی DWG</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveTab(section.key)}
            className={`px-4 py-2 border-b-2 transition-colors duration-200 ${
              activeTab === section.key
                ? "border-blue-500 text-blue-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 border">ردیف</th>
              <th className="px-4 py-2 border">توضیح فایل</th>
              <th className="px-4 py-2 border">DWG</th>
              <th className="px-4 py-2 border">PDF</th>
            </tr>
          </thead>
          <tbody>
            {activeSection?.items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.title}</td>
                <td className="px-4 py-2 border text-center">
                  <a
                    href={item.dwgUrl}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  >
                    <FileText size={16} />
                    دانلود ({item.code})
                  </a>
                </td>
                <td className="px-4 py-2 border text-center">
                  <a
                    href={item.pdfUrl}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  >
                    <FileText size={16} />
                    دانلود
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}