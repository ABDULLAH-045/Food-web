import MainImg from "../components/mainimg";
import React from 'react';
import MenuCom from "../components/menucom";
// import { Coffee } from 'lucide-react';

const Menu = () => {
  const starterMenuItems = [
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560",
      price: "32"
    },
    {
      title: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700",
      price: "43"
    },
    {
      title: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000",
      price: "14"
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560",
      price: "35"
    }
  ];

  const mainCourseMenuItems = [
    {
      title: "Grilled Chicken",
      description: "Juicy grilled chicken with herbs",
      calories: "600",
      price: "18"
    },
    {
      title: "Spaghetti Carbonara",
      description: "Classic spaghetti with creamy sauce",
      calories: "800",
      price: "20"
    },
    {
      title: "Beef Steak",
      description: "Tender beef steak with garlic butter",
      calories: "1000",
      price: "25"
    },
    {
      title: "Vegetable Stir Fry",
      description: "Mixed vegetables stir-fried with soy sauce",
      calories: "500",
      price: "15"
    }
  ];

  const dessertMenuItems = [
    {
      title: "Chocolate Cake",
      description: "Rich chocolate cake with creamy frosting",
      calories: "800",
      price: "15"
    },
    {
      title: "Lemon Tart",
      description: "Zesty lemon tart with a crisp crust",
      calories: "600",
      price: "12"
    },
    {
      title: "Vanilla Ice Cream",
      description: "Smooth vanilla ice cream with a cherry on top",
      calories: "300",
      price: "8"
    },
    {
      title: "Apple Pie",
      description: "Warm apple pie with a flaky crust",
      calories: "450",
      price: "10"
    }
  ];

  const drinksMenuItems = [
    {
      title: "Cappuccino",
      description: "Hot cappuccino with steamed milk",
      calories: "150",
      price: "5"
    },
    {
      title: "Green Tea",
      description: "Refreshing green tea with lemon",
      calories: "0",
      price: "3"
    },
    {
      title: "Mango Smoothie",
      description: "Cold mango smoothie with a hint of mint",
      calories: "200",
      price: "7"
    },
    {
      title: "Orange Juice",
      description: "Freshly squeezed orange juice",
      calories: "120",
      price: "4"
    }
  ];

  return (
    <>
      <MainImg pagename="Our Menu" openedpage="Menu" />

      <div className="flex space-x-2 bg-white px-[320px] py-[70px]">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900">Starter Menu</h1>
          </div>
          <div className="divide-y divide-gray-200">
            {starterMenuItems.map((item, index) => (
              <MenuCom
                key={index}
                title={item.title}
                description={item.description}
                calories={item.calories}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div><img src="menu1.png" alt="Menu 1" /></div>
      </div>

      <div className="flex space-x-2 bg-white px-[420px] py-[50px]">
        <div><img src="menu2.png" alt="Menu 2" /></div>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900">Main Course</h1>
          </div>
          <div className="divide-y divide-gray-200">
            {mainCourseMenuItems.map((item, index) => (
              <MenuCom
                key={index}
                title={item.title}
                description={item.description}
                calories={item.calories}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

     
      {/* Image 3 with statistics */}
      <div className="relative px-14">
        <img src="stake.png" className="bg-black opacity-15" alt="Stake" />
        <div className="flex items-center space-x-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <div><img src="chef.png" alt="Chef" /></div>
            <h3 className="text-3xl pl-8 font-semibold pt-3">429</h3>
            <p className="text-lg font-semibold pt-3">Professional Chefs</p>
          </div>
          <div>
            <div><img src="bur.png" alt="Burger" /></div>
            <h3 className="text-3xl pl-8 font-semibold pt-3">529</h3>
            <p className="text-lg font-semibold pt-3">Items of Food</p>
          </div>
          <div>
            <div><img src="pizza.png" alt="Pizza" /></div>
            <h3 className="text-3xl pl-8 font-semibold pt-3">229</h3>
            <p className="text-lg font-semibold pt-3">Years of Experience</p>
          </div>
          <div>
            <div><img src="spoo.png" alt="Spoon" /></div>
            <h3 className="text-3xl pl-8 font-semibold pt-3">30</h3>
            <p className="text-lg font-semibold pt-3">Years of Experience</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 bg-white px-[420px] py-[50px]">
        <div><img src="desserts.png" alt="Menu 2" /></div>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900">Desserts</h1>
          </div>
          <div className="divide-y divide-gray-200">
            {dessertMenuItems.map((item, index) => (
              <MenuCom
                key={index}
                title={item.title}
                description={item.description}
                calories={item.calories}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>


      <div className="flex space-x-2 bg-white px-[420px] py-[50px]">
       
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900">Drinks</h1>
          </div>
          <div className="divide-y divide-gray-200">
            {drinksMenuItems.map((item, index) => (
              <MenuCom
                key={index}
                title={item.title}
                description={item.description}
                calories={item.calories}
                price={item.price}
              />
            ))}
          </div>
          
        </div>
        <div><img src="drink.png" alt="Menu 2" /></div>
      </div>
    </>
  );
};

export default Menu;
