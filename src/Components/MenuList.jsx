import React, { useState } from "react";

const MenuList = ({ menu }) => {
  return (
    <div className="w-full">
      <div className="justify-center flex items-center">
        <img src="/images/RRmenu.png" className="h-72" alt="" />
      </div>

      {Object.keys(menu).map((category) => (
        <div key={category} className="mb-10">
          {category === "asianCuisine" ? (
            <AsianCuisineSection asianCuisine={menu[category]} />
          ) : (
            <CategorySection
              categoryName={category}
              items={menu[category]}
              showImage={category.toLowerCase() === "mandi"} // Show image only for "Mandi"
            />
          )}
        </div>
      ))}
    </div>
  );
};

const AsianCuisineSection = ({ asianCuisine }) => {
  const [dropdownStates, setDropdownStates] = useState(
    asianCuisine.categories.map(() => false) // Initialize dropdown states for categories
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
      {/* <p className="text-xl text-gray-600 text-center mb-6">{asianCuisine.description}</p>   */}

      {asianCuisine.categories.map((subcategory, index) => (
        <div
          key={subcategory.name}
          className="p-5 rounded-lg shadow-lg border-2 border-white bg-yellow-300 cursor-pointer hover:bg-yellow-400 transition"
          onClick={() => toggleDropdown(index)}
        >
          <div className="flex items-center justify-between">
            {/* Subcategory Name */}
            <h4 className="text-xl font-semibold text-gray-800 lg:text-2xl">
              {subcategory.name.toUpperCase()}
            </h4>
            {/* Plus/Minus Button */}
            <span
              className="text-2xl font-bold text-gray-700 bg-white w-8 h-8 flex items-center justify-center rounded-full"
            >
              {dropdownStates[index] ? "-" : "+"}
            </span>
          </div>

          {/* Dropdown Content */}
          {dropdownStates[index] && (
            <div className="mt-4">
              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <h2 className="text-4xl mb-5 text-black text-center font-bold" style={{ fontFamily: 'Great Vibes, cursive' }}>
        {categoryName}
      </h2>
      <div className="flex flex-col ">
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
                <span
                  className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full"
                >
                  {dropdownStates[index] ? "-" : "+"}
                </span>
              </div>

              {dropdownStates[index] && (
                <div className="">
                  {item.image && (
                    <div className="flex justify-center items-center mb-4">
                      <img
                        src={item.image}
                        className="h-40 object-cover rounded-lg"
                        alt={item.item}
                      />
                    </div>
                  )}

                  {item.portions ? (
                    <ul className="grid grid-cols-2 gap-4">
                      {Object.entries(item.portions).map(([portion, price]) => (
                        <li
                          key={portion}
                          className="text-gray-800 text-center bg-gray-100 p-2 rounded shadow"
                        >
                          <span className="block font-bold">
                            {portion.toUpperCase()}
                          </span>
                          <span className="block">Rs. {price}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-800 text-center text-lg">
                      Price: Rs. {item.price}
                    </p>
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
