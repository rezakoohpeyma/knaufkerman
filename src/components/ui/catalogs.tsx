"use client"
import React, { useState } from 'react'
import { CatalogsDB  , itemsCatalogs } from '@/data/Catalogs'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import LazyImage from './lazyLoad'

function Catalogs() {
const catalogs = CatalogsDB
const itemsCatalog = itemsCatalogs
  return (
   <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 bg-bg text-text">
      {catalogs.map((catalog, idx) => (
        <section key={idx} className="space-y-6">
          <div className="flex">
            <h2 className="text-2xl font-bold font-vazirmatn border-r-4 border-sky-500 pr-4">
              {catalog.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalog.items.map((itemChild, childIdx) => (
              <div key={childIdx} >
                <Link href={itemChild.path} target="_blank" className="block">
                  <div className=" transition-shadow duration-300 overflow-hidden  ">
                    <div className="flex items-center justify-center h-full p-4">
                      <LazyImage
                        src={`/${itemChild.imageUrl}`}
                        alt={itemChild.title}
                        width={300}
                        height={200}
                        className="rounded object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="group flex items-center justify-center gap-x-2 mt-2 p-2 rounded-lg text-text hover:bg-primary hover:text-white transition-colors duration-300">
                      <FileText className="text-second group-hover:text-white" />
                      <span className="text-sm font-vazirmatn">
                        {itemChild.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {itemsCatalog.map((catalog, idx) => (
        <section key={idx} className="space-y-6">
          <div className="flex">
            <h2 className="text-2xl font-bold font-vazirmatn border-r-4 border-primary pr-4">
              {catalog.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalog.items.map((itemChild, childIdx) => (
              <div key={childIdx}>
                <Link href={itemChild.path} target="_blank" className="block">
                  <div className="rounded-lg transition-shadow duration-300 overflow-hidden ">
                    <div className="flex items-center justify-center h-full p-4">
                      <LazyImage
                        src={`/${itemChild.imageUrl}`}
                        alt={itemChild.title}
                        width={300}
                        height={200}
                        className="rounded object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="group flex items-center justify-center gap-x-2 mt-2 p-2 rounded-lg text-text hover:bg-primary hover:text-white transition-colors duration-300">
                      <FileText className="text-second group-hover:text-white" />
                      <span className="text-sm font-vazirmatn">
                        {itemChild.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Catalogs