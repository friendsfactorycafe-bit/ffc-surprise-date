"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery/gallery1.jpg",
    alt: "Students studying at university library",
    category: "Campus Life"
  },
  {
    src: "/images/gallery/gallery2.jpg",
    alt: "Graduation ceremony celebration",
    category: "Graduation"
  },
  {
    src: "/images/gallery/gallery3.jpg",
    alt: "International students group photo",
    category: "Student Life"
  },
  {
    src: "/images/gallery/gallery4.jpg",
    alt: "University campus building",
    category: "Campus"
  },
  {
    src: "/images/gallery/gallery5.jpg",
    alt: "Students in classroom lecture",
    category: "Education"
  },
  {
    src: "/images/gallery/gallery6.jpg",
    alt: "Study abroad consultation session",
    category: "Consultation"
  },
  {
    src: "/images/gallery/gallery7.jpg",
    alt: "Students at university cafeteria",
    category: "Campus Life"
  },
  {
    src: "/images/gallery/gallery8.jpg",
    alt: "University research laboratory",
    category: "Research"
  },
  {
    src: "/images/gallery/gallery9.jpg",
    alt: "Students celebrating success",
    category: "Success Stories"
  },
  {
    src: "/images/gallery/gallery10.jpg",
    alt: "Modern university architecture",
    category: "Campus"
  },
  {
    src: "/images/gallery/gallery11.jpg",
    alt: "Students working on project",
    category: "Education"
  },
  {
    src: "/images/gallery/gallery12.jpg",
    alt: "International student orientation",
    category: "Student Life"
  }
]

interface BusinessGallerySectionProps {
  businessName: string
  accentColor?: string
}

export function BusinessGallerySection({ businessName, accentColor = "emerald" }: BusinessGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Success Stories Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of our students' journey to achieving their study abroad dreams with {businessName}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className={`text-xs font-medium text-${accentColor}-400`}>{image.category}</p>
                  <p className="text-sm truncate">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black/95 border-none p-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-50 text-white hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            {selectedImage !== null && (
              <div className="relative aspect-video">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                  <p className={`text-sm text-${accentColor}-400`}>{galleryImages[selectedImage].category}</p>
                  <p className="text-lg">{galleryImages[selectedImage].alt}</p>
                  <p className="text-sm text-gray-400 mt-1">{selectedImage + 1} / {galleryImages.length}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
