import QRCode from "react-qr-code";

const QRCodes = () => {
  const restaurants = [
    { id: 1, name: "Restaurant A", link: "http://localhost:5173/menu/1" },
    { id: 2, name: "Restaurant B", link: "http://localhost:5173/menu/2" }
  ];

  return (
    <>
      <div>
        <h1>Restaurant QR Codes</h1>
        
        {restaurants.map((res) => (
          <div key={res.id} style={{ margin: "20px" }}>
            <h3>{res.name}</h3>
            <QRCode
              value={res.link}
              size={150} // Size in pixels
              style={{ margin: "10px" }}
            />

          </div>
        ))}
      </div>
    </>
  );
};

export default QRCodes;
