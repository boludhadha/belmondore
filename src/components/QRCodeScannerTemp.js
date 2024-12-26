import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRCodeScanner = ({ setVideoUrl }) => {
  const [scannerVisible, setScannerVisible] = useState(true);

  useEffect(() => {
    // Initialize the QR code scanner with the given options
    const scanner = new Html5QrcodeScanner("qr-scanner", {
      qrbox: { width: 250, height: 250 },
      fps: 5,
      facingMode: "environment", // Default to the back camera
    });

    // Start scanning and handle the scanned QR code
    scanner.render((decodedText) => {
      console.log(`QR Code scanned: ${decodedText}`);
      setVideoUrl(decodedText); // Set the video URL from the QR code
      setScannerVisible(false); // Hide the scanner once a QR code is scanned
    });


    return () => {
      scanner.clear();
    };
  }, [setVideoUrl]);

  const handleRescan = () => {
    setScannerVisible(true);  // Show the scanner again
    setVideoUrl('');          // Clear the video URL
  };

  return (
    <div>
      <h3>Scan QR Code to Play Video</h3>
      {scannerVisible ? (
        <div id="qr-scanner" style={{ width: "100%", height: "400px" }}>
          {/* QR Scanner will be rendered here */}
        </div>
      ) : (
        <div>
          <h4>Video:</h4>
          <button onClick={handleRescan}>Rescan</button>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
