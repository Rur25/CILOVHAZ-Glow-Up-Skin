import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  whatsappNumber: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false,
  whatsappNumber,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      {/* Product Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Tags */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Baru
          </div>
        )}
        {isBestseller && (
          <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Terlaris
          </div>
        )}
        
        {/* Category */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-pink-600">Rp {price.toLocaleString('id-ID')}</span>
          
          <Button
            variant="primary"
            size="sm"
            whatsappNumber={whatsappNumber}
            whatsappMessage={`Hai! Saya tertarik dengan produk ${name}. Bisakah Anda memberikan informasi lebih lanjut?`}
          >
            <MessageCircle size={16} className="mr-1" />
            Beli Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;