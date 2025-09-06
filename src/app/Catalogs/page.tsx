import React from "react";
import { CatalogsDB ,itemsCatalogs } from "../../data/Catalogs";
import Image from "next/image";

export default function CatalogsPage() {
  return (
    <div className="p-4 space-y-6 ">
      {CatalogsDB.map((catalog, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-bold mb-4">{catalog.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {catalog.items.map((itemChild, childIdx) => (
              <div key={childIdx} className="flex flex-col items-center">
                <Image
                  src={`/${itemChild.imageUrl}`} 
                  alt={itemChild.title}
                  width={200}
                  height={200}
                  className="rounded-lg shadow"
                />
                <p className="mt-2 text-sm font-medium">{itemChild.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {itemsCatalogs.map((catalog, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-bold mb-4">{catalog.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {catalog.items.map((itemChild, childIdx) => (
              <div key={childIdx} className="flex flex-col items-center">
                <Image
                  src={`/${itemChild.imageUrl}`} 
                  alt={itemChild.title}
                  width={200}
                  height={200}
                  className="rounded-lg shadow"
                />
                <p className="mt-2 text-sm font-medium">{itemChild.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
