import React, { useState } from "react";
import ScrollingText from "../Pages/utils/ScrollingText";
import { MdLogin } from "react-icons/md";


const MenuList = ({ menu }) => {
  return (
    <div className="w-full">

      <div className="flex flex-row justify-end">
        <button
          onClick={() => window.open("https://rabeehraidan.com/", "_blank")}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 mr-2 hover:bg-blue-600 transition-all"
        >
          <MdLogin className="inline mr-2" /> Visit our Website
        </button>
      </div>

      <div className="justify-center flex items-center">
        <img src="/images/RRmenu.png" className="w-72 p-5  h-auto" alt="Menu" />
      </div>

      {/* ✅ Exclude "asianCuisine" from this loop */}
      {Object.keys(menu).map((category) =>
        category !== "asianCuisine" && (
          <div key={category} className="mb-10">
            <CategorySection
              categoryName={category}
              items={menu[category]}
              showImage={category.toLowerCase() === "mandi"}
            />
          </div>
        )
      )}
      {menu.asianCuisine && <AsianCuisineSection asianCuisine={menu.asianCuisine} />}

      <div className="py-10">  {/* Adds space above and below */}

        {/* Scrolling Text Component */}
        <ScrollingText />

        {/* Text below the scrolling text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          © 2025 Rabeeh Raidan. All Rights Reserved.
        </p>
      </div>


    </div>
  );
};

const AsianCuisineSection = ({ asianCuisine }) => {
  const [dropdownStates, setDropdownStates] = useState(
    asianCuisine.categories.map(() => false)
  );

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div>
      <h2 className="text-4xl mb-5 text-black text-center font-bold" style={{ fontFamily: 'Great Vibes, cursive' }}>
        {asianCuisine.heading}
      </h2>

      {asianCuisine.categories.map((subcategory, index) => (
        <div
          key={subcategory.name}
          className="p-5 rounded-lg shadow-lg border-2 border-white bg-yellow-300 cursor-pointer hover:bg-yellow-400 transition"
          onClick={() => toggleDropdown(index)}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-gray-800 lg:text-2xl">
              {subcategory.name.toUpperCase()}
            </h4>
            <span className="text-2xl font-bold text-gray-700 w-8 h-8 flex items-center justify-center rounded-full">
              {dropdownStates[index] ? "-" : "+"}
            </span>
          </div>

          {dropdownStates[index] && (
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                {subcategory.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 border rounded-lg shadow bg-gray-100 flex flex-col items-center"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-gray-600">Price: Rs. {item.price}</p>
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

const CategorySection = ({ categoryName, items, showImage }) => {
  const [dropdownStates, setDropdownStates] = useState(
    Array.isArray(items) ? items.map(() => false) : []
  );

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div>
      {categoryName.toLowerCase() !== "special arabian mandi" && (
        <h2 className="text-4xl mb-5 text-black text-center font-bold" style={{ fontFamily: 'Great Vibes, cursive' }}>
          {categoryName}
        </h2>
      )}

      <div className="flex flex-col">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-lg shadow-lg border-2 border-white bg-yellow-300 cursor-pointer hover:bg-yellow-400 transition"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-gray-800 lg:text-2xl">
                  {item.item.toUpperCase()}
                </h4>

                <span className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full">
                  {dropdownStates[index] ? "-" : "+"}
                </span>
              </div>

              {dropdownStates[index] && (
                <div className="mt-4">
                  {item.image && (
                    <div className="flex justify-center items-center mb-4">
                      <img
                        src={item.image}
                        className="h-40 object-cover rounded-lg"
                        alt={item.item}
                      />
                    </div>
                  )}

                  {/* Main Portion List - Single Column Layout */}
                  {item.portions ? (
                    <div className="flex flex-col space-y-3">
                      {Object.entries(item.portions).map(([portion, price]) => (
                        <div
                          key={portion}
                          className="text-gray-800 flex justify-around items-center bg-gray-100 p-2 rounded shadow w-full"
                        >
                          <span className="font-bold">{portion.toUpperCase()}</span>

                          {/* NV Badge Here */}
                          {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold">
                            NV
                          </div> */}

                          <span className="text-lg">Rs. {price}</span>
                        </div>
                      ))}

                    </div>
                  ) : (
                    <p className="text-gray-800 text-center text-lg">
                      Price: Rs. {item.price}
                    </p>
                  )}

                  {/* Mandi Chicken Only Section */}
                  {item.mandiChickenOnly && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-center text-gray-800 underline">
                        Mandi Chicken Only
                      </h3>

                      <div className="flex flex-wrap justify-center gap-4 mt-3">
                        {Object.entries(item.mandiChickenOnly).map(([portion, price]) => (
                          <div key={portion} className="text-gray-800 bg-gray-200 p-3 rounded-lg shadow-md text-center">
                            <span className="block font-bold">{portion.toUpperCase()}</span>
                            <span className="block text-lg">Rs. {price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>

    </div>
  );
};

export default MenuList;
