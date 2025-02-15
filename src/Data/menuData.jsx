import chickenMandi from "/images/chickenmandi.webp";
import alfamMandi from "/images/alfammandi.webp";
import pollichathMandi from "/images/pollichathmandi.webp";
import shawayaMandi from "/images/shawwaya.webp";
import kanthariMandi from "/images/kantharimandi.webp";
import PeriPeriMandi from "/images/perperimandi.webp";
import honeyMandi from "/images/honeymandi.webp";
import beefMandi from "/images/beefmandi.webp";
import muttonMandi from "/images/muttonmandi.webp";
import broast from "/images/broast.webp";



const menuData = {

  "restaurants": [
    {
      "id": 1,
      "name": "Karakkunnu 34",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 90
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 300,
              "mandiChickenOnly": 230,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 700,
              "Beef": 780,
              "Mutton": 1250,
            }
          }
        ],

        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 230,
              "full": 450
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 2,
      "name": "Valanchery",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 100,
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 190,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Chicken Pollichath",
            "image": pollichathMandi,
            "price": {
              "mandi": 190,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 190,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 190,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 150,
            }
          },
          {
            "item": "Beef Pollichath",
            "image": beefMandi,
            "price": {
              "mandi": 230,
              "mandiChickenOnly": 150,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 230,
              "mandiChickenOnly": 150,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 350,
              "mandiChickenOnly": 280,
            }
          },
          {
            "item": "Mandi Rice",
            "image": chickenMandi,
            "price": {
              "mandi": 350,
              "mandiChickenOnly": 280,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 90,
            }
          }

        ],
        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "QUARTER": 130, 
              "HALF": 260,
              "THREE QUATER": 390,
              "FULL": 500
            }
          }
        ],
        "asianCuisine":  {
          "heading": "Asian Cuisine",
          "categories": [
            {
              "name": "Fried Rice",
              "items": [
                {
                  "name": "Veg Fried Rice",
                  "price": 130
                },
                {
                  "name": "Egg Fried Rice",
                  "price": 150
                },
                {
                  "name": "Chicken Fried Rice",
                  "price": 170
                },
                {
                  "name": "Gobi Manchuriyan",
                  "price": 80
                }
              ]
            },
            {
              "name": "Noodles",
              "items": [
                {
                  "name": "Veg Noodles",
                  "price": 130
                },
                {
                  "name": "Egg Noodles",
                  "price": 150
                },
                {
                  "name": "Chicken Noodles",
                  "price": 170
                }
              ]
            },
            {
              "name": "Chicken Dishes",
              "items": [
                {
                  "name": "Garlic Chicken",
                  "price": 140
                },
                {
                  "name": "Chicken Kondattam",
                  "price": 140
                },
                {
                  "name": "Butter Chicken",
                  "price": 80
                }
              ]
            }
          ]
        },
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 3,
      "name": "Areekode Puthalam",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 90
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 300,
              "mandiChickenOnly": 230,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 700,
              "Beef": 780,
              "Mutton": 1250,
            }
          }
        ],

        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 230,
              "full": 450
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 4,
      "name": "Therattammel",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 90
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 300,
              "mandiChickenOnly": 230,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 700,
              "Beef": 780,
              "Mutton": 1250,
            }
          }
        ],

        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 230,
              "full": 450
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 5,
      "name": "Parambil Peedika",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 190,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 190,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 310,
              "mandiChickenOnly": 240,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 750,
              "Beef": 850,
              "Mutton": 1250,
            }
          }
        ],
        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 240,
              "3/4": 360,
              "full": 480
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 6,
      "name": "Edavanna",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 90
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 300,
              "mandiChickenOnly": 230,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 700,
              "Beef": 780,
              "Mutton": 1250,
            }
          }
        ],

        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 230,
              "full": 450
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 7,
      "name": "Thrippanachi",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 90
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 300,
              "mandiChickenOnly": 230,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 700,
              "Beef": 780,
              "Mutton": 1250,
            }
          }
        ],

        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 230,
              "full": 450
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    },
    {
      "id": 8,
      "name": "Kizhisseri",
      "description": "A supper mandhi",
      "menu": {
        "Special Arabian Mandi": [
          {
            "item": "Chicken Mandi",
            "image": chickenMandi,
            "price": {
              "mandi": 150,
              "mandiChickenOnly": 90
            }
          },
          {
            "item": "Alfham Mandi",
            "image": alfamMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Chicken Pollichath Mandi",
            "image": pollichathMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Shawaya Mandi",
            "image": shawayaMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Kanthari Alfham Mandi",
            "image": kanthariMandi,
            "price": {
              "mandi": 170,
              "mandiChickenOnly": 110,
            }
          },
          {
            "item": "Peri Peri Alfham Mandi",
            "image": PeriPeriMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Honey Chicken Mandi",
            "image": honeyMandi,
            "price": {
              "mandi": 180,
              "mandiChickenOnly": 120,
            }
          },
          {
            "item": "Beef Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 200,
              "mandiChickenOnly": 130,
            }
          },
          {
            "item": "Beef Pollichath Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Beef Kanthari Mandi",
            "image": beefMandi,
            "price": {
              "mandi": 210,
              "mandiChickenOnly": 140,
            }
          },
          {
            "item": "Mutton Mandi",
            "image": muttonMandi,
            "price": {
              "mandi": 300,
              "mandiChickenOnly": 230,
            }
          },
          {
            "item": "Mandi Rice Only",
            "price": {
              "mandi": 80,
            }
          },
          {
            "item": "Madhooth",
            "price": {
              "Chicken": 700,
              "Beef": 780,
              "Mutton": 1250,
            }
          }
        ],

        "Broasted Chicken": [
          {
            "item": "Chicken Broasted",
            "image": broast,
            "portions": {
              "Qtr": 120,
              "half": 230,
              "full": 450
            }
          }
        ],
        Drinks: {
          heading: "Drinks",
          categories: [
            {
              name: "Hot Drinks",
              items: [
                { name: "Lime Tea", price: 15 },
                { name: "Mint Tea", price: 15 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Soda", price: 15 },
                { name: "Lime Juice", price: 20 },
                { name: "Mint Lime", price: 30 },
                { name: "Pineapple Lime", price: 30 },
                { name: "Grape Lime", price: 30 },
              ],
            }
          ],
        },
      }
    }
  ]
}


export default menuData;