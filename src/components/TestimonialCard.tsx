import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  testimonial: string;
  location?: string;
  productPurchased?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  rating,
  testimonial,
  location,
  productPurchased,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative transition-transform hover:scale-[1.02] duration-300">
      {/* Quote marks */}
      <div className="absolute top-6 right-6 text-pink-100 text-7xl font-serif leading-none">"</div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial */}
      <p className="text-gray-600 mb-6 relative z-10">{testimonial}</p>
      
      {/* Customer Info */}
      <div className="flex items-center mt-auto">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-200"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          {location && <p className="text-gray-500 text-sm">{location}</p>}
          {productPurchased && <p className="text-pink-500 text-xs mt-1">Purchased: {productPurchased}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;