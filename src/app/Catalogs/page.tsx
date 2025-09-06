import { CatalogsDB, itemsCatalogs } from "../../data/Catalogs";
import Link from "next/link";
import LazyImage from "@/components/ui/lazyLoad";
import { FileText } from "lucide-react";

export default function CatalogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 bg-bg text-text">
      {CatalogsDB.map((catalog, idx) => (
        <section key={idx} className="space-y-6">
          <div className="flex">
            <h2 className="text-2xl font-bold font-vazirmatn border-r-4 border-primary pr-4">
              {catalog.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalog.items.map((itemChild, childIdx) => (
              <div key={childIdx} className="group">
                <Link href={itemChild.path} target="_blank" className="block">
                  <div className="rounded-lg transition-shadow duration-300 overflow-hidden  ">
                    <div className="flex items-center justify-center h-full p-4">
                      <LazyImage
                        src={`/${itemChild.imageUrl}`}
                        alt={itemChild.title}
                        width={300}
                        height={200}
                        className="rounded object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-x-2 mt-2 text-text">
                      <FileText className="text-second" />
                      <span className="text-sm font-vazirmatn">{itemChild.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {itemsCatalogs.map((catalog, idx) => (
        <section key={idx} className="space-y-6">
          <div className="flex">
            <h2 className="text-2xl font-bold font-vazirmatn border-r-4 border-primary pr-4">
              {catalog.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalog.items.map((itemChild, childIdx) => (
              <div key={childIdx} className="group">
                <Link href={itemChild.path} target="_blank" className="block">
                  <div className="rounded-lg transition-shadow duration-300 overflow-hidden ">
                    <div className="flex items-center justify-center h-full p-4">
                      <LazyImage
                        src={`/${itemChild.imageUrl}`}
                        alt={itemChild.title}
                        width={300}
                        height={200}
                        className="rounded object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-x-2 mt-2 text-text">
                      <FileText className="text-second" />
                      <span className="text-sm font-vazirmatn">{itemChild.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
