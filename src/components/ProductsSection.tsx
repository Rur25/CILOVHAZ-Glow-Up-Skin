import React from 'react';
import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: "CILOVHAZ Facial Wash 100ml",
    description: "Sabun pembersih wajah dengan formula khusus yang membantu membersihkan kulit, mencerahkan, serta menjadikannya lembut, kenyal, dan tampak bersinar.",
    price: 599000,
    image: "https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg",
    category: "Facial Wash",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "CILOVHAZ Face Toner 60ml",
    description: "Toner yang menyegarkan dan membersihkan sisa make-up secara optimal, membantu menjaga kulit tetap sehat dan tampak cerah bercahaya.",
    price: 699000,
    image: "https://images.pexels.com/photos/4465822/pexels-photo-4465822.jpeg",
    category: "Perawatan wajah",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "CILOVHAZ Day Cream 10g",
    description: "Krim wajah siang dengan UV filter, vitamin, dan moisturizer untuk membantu mencerahkan serta melembapkan kulit.",
    price: 549000,
    image: "https://images.pexels.com/photos/4465815/pexels-photo-4465815.jpeg",
    category: "Perawatan Siang",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 4,
    name: "CILOVHAZ Night Cream 10g",
    description: "Krim malam dengan vitamin dan moisturizer untuk menjaga kelembapan dan mencerahkan kulit saat istirahat.",
    price: 649000,
    image: "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg",
    category: "Perawatan Malam",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Pembersih Pearl Essence",
    description: "Pembersih lembut dengan ekstrak mutiara dan lidah buaya untuk sensasi segar dan bersih.",
    price: 449000,
    image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
    category: "Pembersih",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Eksfoliator Cherry Blossom",
    description: "Scrub eksfoliasi lembut dengan ekstrak bunga sakura untuk kulit lebih halus dan cerah.",
    price: 499000,
    image: "https://images.pexels.com/photos/4465817/pexels-photo-4465817.jpeg",
    category: "Eksfoliator",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 7,
    name: "Masker Vitamin C Radiance",
    description: "Masker wajah pencerah dengan vitamin C dan kunyit untuk meningkatkan kilau alami kulit.",
    price: 399000,
    image: "https://images.pexels.com/photos/4465819/pexels-photo-4465819.jpeg",
    category: "Masker Wajah",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 8,
    name: "Gel Mata Hydra-Boost",
    description: "Gel mata menyegarkan dengan ekstrak mentimun dan kafein untuk mengurangi bengkak dan lingkaran hitam.",
    price: 549000,
    image: "https://images.pexels.com/photos/4465826/pexels-photo-4465826.jpeg",
    category: "Perawatan Mata",
    isNew: false,
    isBestseller: false,
  },
];

const ProductsSection: React.FC = () => {
  const whatsappNumber = "1234567890"; // Ganti dengan nomor WhatsApp Anda
  
  return (
    <section id="products" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Produk Kami"
          subtitle="Temukan rangkaian produk perawatan kulit premium kami yang dirancang untuk meningkatkan kecantikan alami Anda."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              isBestseller={product.isBestseller}
              whatsappNumber={whatsappNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;