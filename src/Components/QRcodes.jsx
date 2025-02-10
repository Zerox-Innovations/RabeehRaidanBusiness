import React from "react";
import QRCode from "react-qr-code";

const QRCodes = () => {
  const restaurants = [
    { id: 2, name: "Valanchery", link: "https://rabeehraidan.com/qrcode" },
  ];

  // Function to download QR Code
  const downloadQRCode = (link, name) => {
    const canvas = document.createElement("canvas");
    const qrCodeElement = document.getElementById(`qrcode-${name}`);

    if (qrCodeElement) {
      const svg = qrCodeElement.querySelector("svg");
      const xml = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([xml], { type: "image/svg+xml" });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        // Convert canvas to PNG and trigger download
        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${name}_QRCode.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
      img.src = url;
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Restaurant QR Codes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((res) => (
          <div 
            key={res.id} 
            className="p-5 border border-gray-300 rounded-lg shadow-lg flex flex-col items-center bg-white"
          >
            <h3 className="text-xl font-semibold mb-3">{res.name}</h3>
            <div id={`qrcode-${res.name}`} className="p-2 bg-white rounded-lg">
              <QRCode
                value={res.link}
                size={150}
              />
            </div>
            <button
              onClick={() => downloadQRCode(res.link, res.name)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Download QR Code
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodes;
