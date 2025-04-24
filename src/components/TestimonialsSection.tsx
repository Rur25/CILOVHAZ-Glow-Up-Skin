import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Dewi Kusuma",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    rating: 5,
    testimonial: "Serum Wajah Rose Quartz benar-benar mengubah kulit saya! Saya sudah lama berjuang dengan kulit kering, dan setelah dua minggu, kulit saya terasa sangat terhidrasi dan terlihat bercahaya.",
    location: "Jakarta",
    productPurchased: "Serum Wajah Rose Quartz"
  },
  {
    id: 2,
    name: "Sinta Wijaya",
    avatar: "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg",
    rating: 5,
    testimonial: "Saya sangat suka dengan Krim Malam Lavender Dream! Aromanya luar biasa dan benar-benar memperbaiki tekstur kulit saya. Sekarang saya bangun dengan kulit yang lembut dan halus.",
    location: "Surabaya",
    productPurchased: "Krim Malam Lavender Dream"
  },
  {
    id: 3,
    name: "Rina Putri",
    avatar: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg",
    rating: 4,
    testimonial: "Pembersih Pearl Essence sangat lembut namun efektif. Membersihkan semua makeup tanpa membuat kulit kering. Sedikit produk sudah cukup untuk hasil maksimal!",
    location: "Bandung",
    productPurchased: "Pembersih Pearl Essence"
  },
  {
    id: 4,
    name: "Maya Sari",
    avatar: "https://images.pexels.com/photos/3764135/pexels-photo-3764135.jpeg",
    rating: 5,
    testimonial: "Saya sudah mencoba banyak produk vitamin C, tapi Masker Vitamin C Radiance benar-benar luar biasa. Noda hitam saya memudar secara nyata, dan warna kulit saya jauh lebih merata.",
    location: "Semarang",
    productPurchased: "Masker Vitamin C Radiance"
  },
  {
    id: 5,
    name: "Anita Permata",
    avatar: "https://images.pexels.com/photos/3764151/pexels-photo-3764151.jpeg",
    rating: 5,
    testimonial: "Eksfoliator Cherry Blossom sangat cocok untuk kulit sensitif saya. Mengeksfoliasi dengan lembut tanpa iritasi, dan aromanya sangat menenangkan!",
    location: "Yogyakarta",
    productPurchased: "Eksfoliator Cherry Blossom"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplay, itemsToShow]);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - itemsToShow : prev - 1));
    setAutoplay(false);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - itemsToShow ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Testimoni Pelanggan"
          subtitle="Baca apa yang pelanggan kami katakan tentang pengalaman mereka dengan produk kami."
        />
        
        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 z-10">
            <button 
              onClick={handlePrev}
              className="bg-white p-2 rounded-full shadow-md text-pink-500 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-10">
            <button 
              onClick={handleNext}
              className="bg-white p-2 rounded-full shadow-md text-pink-500 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              aria-label="Testimoni selanjutnya"
            >
              <ChevronRight />
            </button>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8">
            {[...Array(testimonials.length - itemsToShow + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-pink-500' : 'bg-gray-300 hover:bg-pink-300'
                }`}
                aria-label={`Lihat set testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;