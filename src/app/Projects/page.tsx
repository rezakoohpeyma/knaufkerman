"use client"

import type React from "react"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Button from "@/components/ui/button"
import LazyImage from "@/components/ui/lazyLoad"

interface ProjectsImage {
  id: number
  src: string
  alt: string
  title?: string
}

const sampleImages: ProjectsImage[] = Array.from({ length: 142 }, (_, index) => {
  const imageUrl = index + 1
  return {
    id: imageUrl,
    src: `/images/projects/nama 01 (${imageUrl}).jpg`,
    alt: `nama 01 (${imageUrl})`,
    title: `Nama 01 (${imageUrl})`,
  }
})

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<ProjectsImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: ProjectsImage, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => setSelectedImage(null)

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + sampleImages.length) % sampleImages.length
        : (currentIndex + 1) % sampleImages.length

    setCurrentIndex(newIndex)
    setSelectedImage(sampleImages[newIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") navigateImage("prev")
    if (e.key === "ArrowRight") navigateImage("next")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-vazirmatn text-text tracking-tight">
          پروژه‌های انجام شده شرکت فنی مهندسی <span className="text-primary">طاق</span>        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-[1.03]"
          >
            <button
              onClick={() => openLightbox(image, index)}
              className="w-full h-full"
            >
              <div className="aspect-square overflow-hidden">
                <LazyImage
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-base truncate drop-shadow-md">
                    {image.title}
                  </h3>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-14 right-4 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-zoomIn">
              <LazyImage
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={900}
                height={700}
                className="rounded-xl object-contain max-h-[80vh] mx-auto"
              />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="text-white text-2xl font-bold drop-shadow-lg">
                  {selectedImage.title}
                </h2>
                <p className="text-white/80 text-sm mt-1">
                  {currentIndex + 1} از {sampleImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
