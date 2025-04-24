import React from 'react';
import SectionHeading from './SectionHeading';
import { Heart, ShieldCheck, Leaf, Award, Clock, Sparkles } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5 text-pink-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Dibuat dengan Cinta",
      description: "Setiap produk dibuat dengan penuh cinta dan perhatian terhadap detail untuk hasil optimal."
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Teruji Dermatologis",
      description: "Semua produk kami telah diuji dan disetujui oleh dokter kulit bersertifikat untuk keamanan dan efektivitas."
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "100% Alami",
      description: "Kami hanya menggunakan bahan-bahan alami yang bersumber dari pemasok berkelanjutan dan etis."
    },
   
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Hasil Cepat",
      description: "Lihat peningkatan yang nyata pada kulit Anda dalam waktu secepat 2 minggu dengan penggunaan rutin."
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "Kualitas Premium",
      description: "Kami tidak pernah berkompromi dalam hal kualitas, memastikan Anda menerima produk perawatan kulit terbaik."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Mengapa Memilih CILOVHAZ"
          subtitle="Temukan keunggulan yang membedakan produk perawatan kulit kami dari yang lain."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;