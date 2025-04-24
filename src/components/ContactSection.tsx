import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const whatsappNumber = "083861272970";
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Hubungi Kami"
          subtitle="Punya pertanyaan tentang produk kami? Kami siap membantu."
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full text-pink-500 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Lokasi Kami</h4>
                  <p className="text-gray-600 mt-1">Jl. Kecantikan No. 123, Jakarta Selatan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full text-pink-500 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Nomor Telepon</h4>
                  <p className="text-gray-600 mt-1">+62 812-3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full text-pink-500 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600 mt-1">halo@cilovhaz.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full text-pink-500 mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Jam Operasional</h4>
                  <p className="text-gray-600 mt-1">Senin - Jumat: 09.00 - 18.00</p>
                  <p className="text-gray-600">Sabtu: 10.00 - 16.00</p>
                </div>
              </div>
            </div>
            
            {/* Map or Image */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md h-64 bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg" 
                alt="Lokasi toko" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;