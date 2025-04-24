import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/60 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl ml-0 md:ml-10 lg:ml-16 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="text-pink-300">Temukan</span> Kecantikan Alami Anda
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
            Produk perawatan kulit premium yang dibuat dengan bahan-bahan alami untuk mengungkap kilau dan pancaran alami kulit Anda. Rasakan kecantikan dalam bentuknya yang paling murni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button 
              variant="primary" 
              size="lg" 
              href="#products"
            >
              Jelajahi Produk
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="#about"
              className="border-white text-white hover:bg-white/10"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;