import React, { useState } from "react";
import { MdLogin } from "react-icons/md";
import ScrollingText from '../Pages/utils/ScrollingText.jsx'

const MenuList = ({ menu }) => {
  return (
    <>
      <div className="w-full">
        {/* Visit Website Button */}
        <div className="flex flex-row justify-end">
          <button
            onClick={() => window.open("https://rabeehraidan.com/", "_blank")}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 mr-2 hover:bg-blue-600 transition-all"
          >
            <MdLogin className="inline mr-2" /> Visit our Website
          </button>
        </div>

        {/* Menu Image */}
        <div className="justify-center flex items-center">
          <img src="/images/RRmenu.png" className="w-72 p-5 h-auto" alt="Menu" />
        </div>

        {/* Render Each Category */}
        {Object.keys(menu).map((category) => (
          <div key={category} className="mb-10">
            {category === "asianCuisine" || category === "Drinks" ? (
              <AsianCuisineSection data={menu[category]} />
            ) : (
              <CategorySection categoryName={category} items={menu[category]} />
            )}
          </div>  
        ))}
      </div>
      <div className="py-5">
          <ScrollingText/>
          <div className="mb-4 flex justify-center mt-4">
             <p className="text-softOrange">© Rabeeh Raidan 2025. All Rights Reserved.</p>
          </div>
      </div>
    </>
  );
};


const CategorySection = ({ categoryName, items }) => {
  const [dropdownStates, setDropdownStates] = useState(items.map(() => false));

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  // Define the background colors


  return (
    <div>
      <h2 className="text-3xl mb-5 text-black text-center" style={{ fontFamily: 'Oleo Script' }}>
        {categoryName}
      </h2>
      <div className="flex flex-col">
        {items.map((item, index) => {
          // Determine the background color based on the index
          // const bgColor = bgColors[index % bgColors.length];

          return (
            <div
              key={index}
              className="p-5 rounded-lg shadow-lg border-2 border-white bg-yellow-300 cursor-pointer hover:bg-yellow-400"
              // style={{ backgroundColor: bgColor }}
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex flex-col justify-around items-center">
                {/* <div> */}
                  {item.image && (
                    // <div className="flex justify-center items-center mb-4">
                      <img
                        src={item.image}
                        className="h-36 object-cover rounded-lg"
                        alt={item.item}
                        // onLoad={}
                        // loading="lazy"
                      />
                    // </div>
                  )}
                {/* </div> */}
                <h4 className="text-2xl font-semibold text-white lg:text-2xl" style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }} >
                  {item.item}
                </h4>
              </div>

              {dropdownStates[index] && (
                <div className="mt-4">
                  {/* Handle different price structures */}
                  {item.price ? (
                    <div className="flex flex-col justify-around text-center p-4 transition-all duration-300">
                      <div className="flex justify-between md:justify-around items-center mb-2">
                        <p className="text-white text-2xl uppercase" style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                          {item.item}
                        </p>
                        <p className="text-white text-2xl " style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                          ₹{item.price.mandi}
                        </p>
                      </div>

                      {item.price.mandiChickenOnly && (
                        <div className="flex justify-between md:justify-around items-center mt-2">
                          <p className="text-white text-2xl  uppercase" style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                            {item.item.replace(/Mandi$/, "").trim()} Only{" "}
                          </p>
                          <p className="text-white text-2xl " style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                            ₹{item.price.mandiChickenOnly}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : item.portions ? (
                    <div className="flex flex-col w-full px-4 gap-3">
                      {Object.keys(item.portions).map((size) => (
                        <div key={size} className="flex justify-between w-full">
                          <p style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }} className="text-white text-xl">{size.toUpperCase()}</p>
                          <p style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }} className="text-white text-xl font-semibold">₹ {item.portions[size]}</p>
                        </div>
                      ))}
                    </div>

                  ) : (
                    <p className="text-gray-800 text-center text-lg">Price Not Available</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


const AsianCuisineSection = ({ data }) => {
  const [dropdownStates, setDropdownStates] = useState(
    data.categories.map(() => false)
  );

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="py-4">
      {/* Heading for Asian Cuisine */}
      <h2 className="text-4xl mb-4 text-black text-center font-bold" style={{ fontFamily: 'Oleo Script' }}>
        {data.heading}
      </h2>

      {/* Loop through each category */}
      {data.categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {/* Category Header (e.g., Fried Rice, Noodles, etc.) */}
          <div
            className="p-5 rounded-lg shadow-lg border-2 border-white bg-yellow-300 cursor-pointer hover:bg-yellow-400 transition-all"
            onClick={() => toggleDropdown(categoryIndex)}
          >
            <div
              className={`flex items-center ${dropdownStates[categoryIndex] ? "justify-center" : "justify-between"}`}
            >
              <h4 className="text-2xl font-semibold text-white lg:text-2xl" style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                {category.name}
              </h4>

              {/* Show +/- only when dropdown is closed */}
              {!dropdownStates[categoryIndex] && (
                <span className="text-2xl font-bold text-white w-8 h-8 flex items-center justify-center rounded-full">
                  {dropdownStates[categoryIndex] ? "-" : "+"}
                </span>
              )}
            </div>
          </div>

          {/* Dropdown Content */}
          {dropdownStates[categoryIndex] && (
            <div>
              {/* Items List */}
              <div className="flex flex-col gap-4 bg-yellow-300 p-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-4 flex flex-col justify-around items-center"
                  >
                    {/* Item Image (if available) */}
                    {item.image && (
                      <div className="mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* Item Name and Price (JUSTIFIED) */}
                    <div className="flex justify-between md:justify-around text-center w-full px-4">
                      <h4 className="text-2xl text-white uppercase" style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                        {item.name}
                      </h4>
                      <p className="text-white text-2xl uppercase" style={{ fontFamily: 'Ubuntu Condensed, sans-serif' }}>
                        ₹ {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default MenuList;
