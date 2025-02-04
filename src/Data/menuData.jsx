import chickenMandi from "/images/chickenmandi.webp";
import alfamMandi from "/images/alfammandi.png";
import pollichathMandi from "/images/pollichathmandi.webp";
import shawayaMandi from "/images/shawwaya.webp";
import kanthariMandi from "/images/kantharimandi.webp";
import PeriPeriMandi from "/images/perperimandi.webp";
import honeyMandi from "/images/honeymandi.webp";
import beefMandi from "/images/beefmandi.webp";
import muttonMandi from "/images/muttonmandi.webp";
import broast from "/images/broast.png";



const menuData = {

  "restaurants": [
    {
      "id": 1,
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
                { name: "Tea", price: 20 },
                { name: "Black Tea", price: 15 },
                { name: "Coffee", price: 30 },
                { name: "Ginger Tea", price: 25 },
              ],
            },
            {
              name: "Cold Drinks",
              items: [
                { name: "Lime Juice", price: 40 },
                { name: "Mint Lemonade", price: 50 },
                { name: "Falooda", price: 100 },
                { name: "Cold Coffee", price: 80 },
              ],
            }
          ],
        },
      }
    },
  ]
}


export default menuData;