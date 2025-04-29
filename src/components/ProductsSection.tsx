import React from 'react';
import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: "CILOVHAZ Facial Wash 100ml",
    description: "Sabun pembersih wajah dengan formula khusus yang membantu membersihkan kulit, mencerahkan, serta menjadikannya lembut, kenyal, dan tampak bersinar.",
    price: 49.999,
    image: "https://i.pinimg.com/1200x/c9/63/62/c9636250e17f2b235052c926e2210b07.jpg",
    category: "Facial Wash",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "CILOVHAZ Face Toner 60ml",
    description: "Toner yang menyegarkan dan membersihkan sisa make-up secara optimal, membantu menjaga kulit tetap sehat dan tampak cerah bercahaya.",
    price: 49.999,
    image: "https://i.pinimg.com/1200x/6b/d5/5f/6bd55f5a12101259d847d6f49d0f6f4e.jpg",
    category: "Perawatan wajah",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "CILOVHAZ Day Cream 10g",
    description: "Krim wajah siang dengan UV filter, vitamin, dan moisturizer untuk membantu mencerahkan serta melembapkan kulit.",
    price: 54.999,
    image: "https://i.pinimg.com/1200x/9e/20/72/9e2072af105d98b74dba2c96dbeb0c3f.jpg",
    category: "Perawatan Siang",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 4,
    name: "CILOVHAZ Night Cream 10g",
    description: "Krim malam dengan vitamin dan moisturizer untuk menjaga kelembapan dan mencerahkan kulit saat istirahat.",
    price: 54.999,
    image: "https://i.pinimg.com/1200x/6d/39/1b/6d391b79893fccadd52ea2f7204dba87.jpg",
    category: "Perawatan Malam",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Paket CILOVHAZ",
    description: "Satu paket perawatan lengkap untuk kulit wajah yang sehat dan bercahaya — terdiri dari Facial Wash, Toner, Day Cream, dan Night Cream. Membersihkan, menyegarkan, serta merawat kulitmu sepanjang hari dan malam",
    price: 199.999,
    image: "https://i.pinimg.com/1200x/07/98/3e/07983efe162e49a35e3346468c2dff77.jpg",
    category: "Pembersih",
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