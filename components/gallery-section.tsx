"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

// Study abroad themed gallery images using local files
const galleryItems = [
  { id: 1, src: "/images/gallery/gallery1.jpg", title: "University Campus" },
  { id: 2, src: "/images/gallery/gallery2.jpg", title: "Graduation Day" },
  { id: 3, src: "/images/gallery/gallery3.jpg", title: "International Students" },
  { id: 4, src: "/images/gallery/gallery4.jpg", title: "Student Life" },
  { id: 5, src: "/images/gallery/gallery5.jpg", title: "Study Group" },
  { id: 6, src: "/images/gallery/gallery6.jpg", title: "Campus Experience" },
  { id: 7, src: "/images/gallery/gallery7.jpg", title: "Lecture Hall" },
  { id: 8, src: "/images/gallery/gallery8.jpg", title: "Research Lab" },
  { id: 9, src: "/images/gallery/gallery9.jpg", title: "Student Success" },
  { id: 10, src: "/images/gallery/gallery10.jpg", title: "Modern Campus" },
  { id: 11, src: "/images/gallery/gallery11.jpg", title: "University Building" },
  { id: 12, src: "/images/gallery/gallery12.jpg", title: "Student Orientation" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % galleryItems.length
        : (selectedImage - 1 + galleryItems.length) % galleryItems.length
    setSelectedImage(newIndex)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-mono uppercase tracking-wider mb-4">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Study Abroad Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            Explore our collection of successful student placements - university campuses, graduation moments, and student life abroad
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox("prev")
              }}
              className="absolute left-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].title}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox("next")
              }}
              className="absolute right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-xl font-medium">{galleryItems[selectedImage].title}</p>
              <p className="text-sm text-gray-400">{selectedImage + 1} / {galleryItems.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
