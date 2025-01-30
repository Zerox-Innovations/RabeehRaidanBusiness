import React from 'react';
import { BiRun } from "react-icons/bi";

const AboutUsPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col space-y-7 w-full max-w-7xl text-center p-10 bg-lime-900 ">
        <div>
          <h2 className="text-4xl font-bold text-white text-left">CLASSIC ARABIAN MANDI</h2>
        </div>
        {/* Heading */}

        {/* Paragraph */}
        <div className="text-white space-y-4 text-left">
          <p>
            At Raidan, we bring you the authentic taste of Mandi, a traditional dish that is cherished across the Middle East and parts of the Indian subcontinent. Our Mandi is made with only the finest ingredients, combined with time-honored cooking techniques that guarantee a meal packed with flavor, tradition, and warmth.


          </p>

          <p>
            Our Mandi is not just food; it's an experience. From the aromatic spices to the perfectly cooked meat and rice, every bite tells a story. We offer a variety of Mandis, each with its own distinctive flavors and ingredients that cater to all tastes. Whether you're craving the richness of chicken, the tenderness of lamb, or the savory depth of vegetables, our Mandi is made to please every palate.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-7 w-full max-w-7xl text-center p-10 bg-blue-700 ">
        <div className=''>
          <h2 className="text-4xl font-bold text-white text-left">OUR STORY</h2>
          {/* Heading */}

          {/* Paragraph */}
          <div className="text-white space-y-4 text-left mt-4">
            <p>
              When four school friends—Salam Kottammal, Rafeek EK, Suabir Pc, Shihabudheen realized we were bound together not only by our deep friendship but also by a shared passion for food, we decided to turn this into something tangible. As expatriates, we felt that it was not enough to write this only for the Arab world, we should also enjoy it for the people of Kerala. After returning home after ending our expatriate life, we started from Chemmad. Our weekend adventures, searching for new and exciting flavors, had developed into a dream: to start a venture that could bring our culinary discoveries to others. And so, our brainchild, Rabeeh raidan was born. We chose to launch in Chammad, a town in Malappuram, Kerala, where the food culture was still developing.
            </p>

            <p>
              Chammad, although not known for its food scene, provided a chance for us to carve out a niche and introduce a new dining experience. Another part of Malappuram, Karakunnu 34 in Manjeri. After a long time there, we reached Valanchery, a part of Malabar. Knowing the growth of the business, we understood that we should feed the important people here and welcome them and see the love in their hearts through their eyes. We were addicted to this feeling. We started two outlets there in Areekkot in a way that the people of Areekkot could not forget us. After that, we joined the part where Kerala was going to cross and reached Edavanna. We also introduced our taste in Thrippananchi, the local area of all of ours, Pookkalathur's. We also started in Kizhissery too, where the Malabar Fives World Cup is held. After that, we are back in Valanchery. The venture started by four of us has continued to grow to eight shops.
            </p>
          </div>
        </div>
      <div>
          <img src="/images/home.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
