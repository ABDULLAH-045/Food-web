import React from 'react';
import MainImg from '../components/mainimg';
import ProductCard from '../components/productcard';

const product = [
  { key: "1", name: "Burger", price: "$21.00", oldPrice: "$45.00", image: "shop3.png", isNew: true },
  { key: "2", name: "Pizza", price: "$43.00", image: "shop4.png" },
  { key: "3", name: "Chocolate Muffin", price: "$28.00", image: "shop2.png" },
  { key: "4", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "shop2.png" },
  { key: "5", name: "Country Burger", price: "$45.00", image: "shop7.png" },
  { key: "6", name: "Drink", price: "$23.00", oldPrice: "$45.00", image: "shop5.png" },
  { key: "7", name: "Chease Butter", price: "$10.00", image: "shop6.png" },
  { key: "8", name: "Sandwiches", price: "$25.00", image: "shop7.png" },
  { key: "9", name: "Chicken Chup", price: "$12.00", image: "shop4.png" },
  { key: "10", name: "Pizza", price: "$43.00", image: "shop2.png" },
  { key: "11", name: "Country Burger", price: "$45.00", image: "shop3.png" },
  { key: "12", name: "Drink", price: "$23.00", oldPrice: "$45.00", image: "shop5.png" },
  { key: "13", name: "Pizz", price: "$43.00", image: "shop3.png" },
  { key: "14", name: "Chease Butter", price: "$10.00", image: "shop2.png" },
  { key: "15", name: "Sandwiches", price: "$25.00", image: "shop7.png" },
];

export default function Shop() {
  return (
    <div className="bg-white">
      <MainImg pagename="Shop" openedpage="Shop" />

      <div className="flex justify-between items-center p-4 bg-white text-gray-700 px-64">
        <div className="flex space-x-4">
          <select className="bg-white border border-gray-600 p-2">
            <option>Newest</option>
          </select>
          <select className="bg-white border border-gray-600 p-2">
            <option>Default</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <input type="text" placeholder="Search Product" className="p-2 bg-white text-gray-700 border border-gray-600" />
        </div>
      </div>

      <div className="flex space-x-8 px-64">
        <div className="bg-white h-auto text-black w-3/4">
          <div className="grid grid-cols-3 gap-4 p-4">
            {product.map(item => (
              <ProductCard
                key={item.key}
                image={item.image}
                name={item.name}
                oldPrice={item.oldPrice}
                price={item.price}
                isNew={item.isNew || false}
              />
            ))}
          </div>
        </div>

        <div className="p-4 bg-white text-black space-y-4 w-1/4">
          <h2 className="text-lg">Category</h2>
          <ul>
            <li><input type="checkbox" /> Sandwiches</li>
            <li><input type="checkbox" /> Burger</li>
            <li><input type="checkbox" /> Pizza</li>
          </ul>
          <h2 className="text-lg">Filter By Price</h2>
          <input type="range" min="0" max="8000" className="w-full" />
          <button className="bg-yellow-500 p-2 mt-2 w-full">Filter</button>
          <div className="space-y-3">
            <h3>Latest Products</h3>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex space-x-3">
                <img src="footer1.png" alt="Product" />
                <div className="grid col space-y-1">
                  <br/>
                  <p>Pizza</p>
                  <p>price:211$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}