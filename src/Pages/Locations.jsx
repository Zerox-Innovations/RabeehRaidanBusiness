
import ScrollingText from './utils/ScrollingText';

// Sample branch data
const branches = [
  {
    name: " Karakkunnu 34",
    address: "Kozhikode road kavumpuram valanchery",
    contact: "6238586120 | 7510880610",
    image: "/images/Gallery/6.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+Kuzhimanthi/@11.1752387,76.1328647,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba63715a1170a49:0xe677c162fc23cd5c!8m2!3d11.1752387!4d76.1328647!16s%2Fg%2F11lkxtyndd?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: " Valanchery",
    address: "Padikkal karuvankallu road parambil peedika",
    contact: "7012791427 | 7510791427",
    image: "/images/Gallery/1.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+Kuzhimandhi/@10.8985535,76.0577552,17z/data=!4m14!1m7!3m6!1s0x3ba7b72325752001:0x9424ec37a8f856c5!2sRabeeh+Raidan+Kuzhimandhi!8m2!3d10.8985482!4d76.0603301!16s%2Fg%2F11lw88q7d6!3m5!1s0x3ba7b72325752001:0x9424ec37a8f856c5!8m2!3d10.8985482!4d76.0603301!16s%2Fg%2F11lw88q7d6?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: " Areekode Puthalam",
    address: "kondotty road areakode puthalam",
    contact: "9656843820 | 7012703646",
    image: "/images/Gallery/9.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+Puthalam/@11.2294559,76.0494615,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6479f090de62d:0xdfeec67acf5cddd4!8m2!3d11.2294506!4d76.0520364!16s%2Fg%2F11pzbjzfv2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: " Therattamal",
    address: "Areakode Thottumukkam road therattammal Pallipadi",
    contact: "8138906688 | 8138906688",
    image: "/images/Gallery/7.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+Kuzhimandi/@11.2471309,76.0456619,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6477abe721721:0x1bf15b2c031662ce!8m2!3d11.2471256!4d76.0482368!16s%2Fg%2F11q951mhcz?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: " Parambil Peedika",
    address: "Padikkap karuvankallu road parambil peedika",
    contact: "9061657138 | 9061657139",
    image: "/images/Gallery/11.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+%E0%B4%95%E0%B5%81%E0%B4%B4%E0%B4%BF%E0%B4%AE%E0%B4%A8%E0%B5%8D%E0%B4%A4%E0%B4%BF/@11.1080213,75.9291178,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba64fc739013d77:0xa58f7d6a9e702ae5!8m2!3d11.108016!4d75.9316927!16s%2Fg%2F11sv6r_wkg?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: " Edavanna",
    address: " Areekode othayi road Edavanna, Kerala 676541",
    contact: "9605302313 | 95263 07313",
    image: "/images/Gallery/6.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+Kuzhimanthi+Edavanna/@11.2210882,76.1387896,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba639d4fe02fa9f:0x20b02cbd487e0cd7!8m2!3d11.2210829!4d76.1413645!16s%2Fg%2F11l74lgmgh?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: " Thrippanachi",
    address: "Manjeri Kizhissery road Thrippanachi",
    contact: "8055800313 | 80557 00313",
    image: "/images/Gallery/3.jpg",
    mapLink: "https://www.google.com/maps/place/RABEEH+RAIDAN+KUZHIMANDHI+THRIPPANCHI/@11.1654097,76.0451582,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba649f7ae7cefb5:0x5bc313f7f115cdfe!8m2!3d11.1654044!4d76.0477331!16s%2Fg%2F11rd9ksnpb?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: " Kizhissery",
    address: "opp. South Indian Bank Balathupuraya, Areekode road  Kizhissery",
    contact: "7510301313 | 7510401313",
    image: "/images/Gallery/8.jpg",
    mapLink: "https://www.google.com/maps/place/Rabeeh+Raidan+Kuzhimandi+Kizhisseri/@11.1778183,75.963998,14z/data=!4m10!1m2!2m1!1skizhissery+raidan!3m6!1s0x3ba649fa1933ab1b:0xc37c0d9b9840b46a!8m2!3d11.1778183!4d76.0021068!15sChFraXpoaXNzZXJ5IHJhaWRhbloTIhFraXpoaXNzZXJ5IHJhaWRhbpIBCnJlc3RhdXJhbnTgAQA!16s%2Fg%2F11wfr09b1x?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const Locations = () => {
  return (
    <>
      <div className="relative top-0 left-0 w-full z-40 bg-gray-900 text-white">
        <ScrollingText />
      </div>
      <div className="max-w-7xl mx-auto p-8 flex justify-center md:mt-64 mt-48 min-h-screen">

        <div className='flex flex-col'>
          <div>
            <h1 className="text-5xl text-softOrange font-bold text-center mb-12" style={{ fontFamily: 'DM Sans, sans-serif' }}>FIND US</h1>
          </div>
          <div className="space-y-8 flex flex-col justify-center gap-8 px-4 md:px-12 lg:px-20 xl:px-32">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0 w-full"
              >
                {/* Image */}
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 xl:w-[45%] h-auto sm:h-52 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                />

                {/* Branch Details */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold text-softOrange " style={{ fontFamily: 'DM Sans, sans-serif' }}>{branch.name}</h2>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{branch.address}</p>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">Contact: {branch.contact}</p>

                  <div className="mt-3">
                    <button
                      onClick={() => window.open(branch.mapLink, "_blank")} // Opens in a new tab
                      className="bg-blue-500 p-3 px-6 text-white rounded-xl font-bold hover:bg-blue-600 transition"
                    >
                      Navigate Me
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative top-0 left-0 w-full z-40 bg-gray-900 text-white">
        <ScrollingText />
      </div>
    </>
  );
};

export default Locations;
