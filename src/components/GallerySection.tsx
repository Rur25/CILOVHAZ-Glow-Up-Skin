import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.pexels.com/photos/31833750/pexels-photo-31833750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Perawatan Kulit Premium"
  },
  {
    url: "https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg",
    caption: "Produk Alami"
  },
  {
    url: "https://images.pexels.com/photos/3785156/pexels-photo-3785156.jpeg",
    caption: "Hasil Maksimal"
  },
  {
    url: "https://images.pexels.com/photos/31833750/pexels-photo-31833750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Kecantikan Alami"
  },
  {
    url: "https://images.pexels.com/photos/3785163/pexels-photo-3785163.jpeg",
    caption: "Perawatan Intensif"
  },
  {
    url: "https://images.pexels.com/photos/31833750/pexels-photo-31833750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Testimonial CILOVHAZ"
  }
];

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Galeri Kami"
          subtitle="Lihat transformasi dan hasil nyata dari produk-produk CILOVHAZ Glow Up Skin."
        />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Main Slider */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-xl font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-2 rounded-full shadow-lg transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-pink-500 scale-110'
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;