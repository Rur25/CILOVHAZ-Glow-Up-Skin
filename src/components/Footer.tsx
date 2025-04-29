import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-pink-500 mr-2" />
              <span className="text-2xl font-semibold text-pink-600">CILOVHAZ</span>
            </div>
            <p className="text-gray-600 mb-6 pr-4">
              Temukan kecantikan dalam diri Anda dengan produk perawatan kulit premium kami yang terbuat dari bahan-bahan alami.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-pink-500 transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">Tentang Kami</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-pink-500 transition-colors">Produk</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-pink-500 transition-colors">Testimoni</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pink-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Jl. Ahmad Yani, Ngrandu, Baureno, Kec. Baureno, Kabupaten Bojonegoro, Jawa Timur 62192</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pink-500 mr-2" />
                <span className="text-gray-600">+62 822-4558-5891</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} CILOVHAZ glowupskin. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;