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
                  <p className="text-gray-600 mt-1">Jl. Ahmad Yani, Ngrandu, Baureno, Kec. Baureno, Kabupaten Bojonegoro, Jawa Timur 62192</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full text-pink-500 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Nomor Telepon</h4>
                  <p className="text-gray-600 mt-1">+62 822-4558-5891</p>
                </div>
              </div>
              
            
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full text-pink-500 mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Jam Operasional</h4>
                  <p className="text-gray-600 mt-1">setiap hari: 07.00 - 21.00</p>
                  
                </div>
              </div>
            </div>
            
            {/* Map or Image */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md h-64 bg-gray-200">
              <img 
                src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kb8bQ3m2fhrQAN3JlovqUg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=200.69621&pitch=0&thumbfov=100" 
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