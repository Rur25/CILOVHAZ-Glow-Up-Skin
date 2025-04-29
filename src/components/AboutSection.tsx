import React from 'react';
import SectionHeading from './SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Tentang CILOVHAZ"
          subtitle="Pelajari kisah di balik brand kecantikan kami dan komitmen kami terhadap bahan-bahan alami."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://i.pinimg.com/736x/07/98/3e/07983efe162e49a35e3346468c2dff77.jpg" 
                alt="Bahan-bahan alami untuk perawatan kulit" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink-100 rounded-lg p-6 shadow-lg hidden md:block">
              <p className="text-pink-800 font-medium text-lg">100% Bahan Alami</p>
              <p className="text-gray-600">Untuk kulit yang lebih sehat dan bercahaya</p>
            </div>
          </div>
          
          {/* Content Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Filosofi Kecantikan Kami</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Di CILOVHAZ, kami percaya bahwa kecantikan sejati berasal dari dalam dan ditingkatkan dengan produk yang tepat. 
              Didirikan pada tahun 2020, misi kami adalah menciptakan solusi perawatan kulit premium yang memanfaatkan 
              kekuatan bahan-bahan alami terbaik.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Setiap produk dalam koleksi kami diformulasikan dengan cermat menggunakan ekstrak botani, minyak esensial, 
              dan bahan aktif alami yang bekerja selaras dengan kulit Anda. Kami tidak pernah berkompromi dalam hal kualitas 
              dan berkomitmen pada pengadaan etis dan praktik berkelanjutan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="text-pink-500 font-bold text-xl mb-2">Bebas Uji Hewan</div>
                <p className="text-gray-600">Kami tidak pernah menguji pada hewan dan dengan bangga tersertifikasi bebas uji hewan.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="text-pink-500 font-bold text-xl mb-2">Ramah Lingkungan</div>
                <p className="text-gray-600">Kemasan berkelanjutan dan praktik yang memperhatikan lingkungan.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="text-pink-500 font-bold text-xl mb-2">Teruji Dermatologis</div>
                <p className="text-gray-600">Semua produk telah diuji dan disetujui oleh dokter kulit.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="text-pink-500 font-bold text-xl mb-2">Bahan Organik</div>
                <p className="text-gray-600">Kami menggunakan bahan-bahan organik premium untuk hasil optimal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;