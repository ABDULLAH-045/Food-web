import React from 'react';


interface Product {
  image: string;
  name: string;
  oldPrice?: string;
  price: string;
  isNew: boolean;
}

const ProductCard: React.FC<Product> = ({ image, name, oldPrice, price, isNew }) => {
  return (
    <div className="bg-white text-white p-4 relative">
      {isNew && <span className="absolute top-0 left-0 bg-orange-500 p-1">New</span>}
      <img src={image} alt={name} className="w-[3120px] h-[200px] " />
      <h3 className="text-lg mt-2">{name}</h3>
      {oldPrice && <p className="text-gray-400 line-through">{oldPrice}</p>}
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default ProductCard;
