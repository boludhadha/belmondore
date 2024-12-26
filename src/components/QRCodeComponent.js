import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeComponent = ({ videoUrl }) => {
  if (!videoUrl) {
    return null; // Do not render anything if no video URL is provided
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Scan the QR Code to View the Video:</h3>
      <div style={{ background: 'white', padding: '16px', display: 'inline-block' }}>
        <QRCode value={videoUrl} size={256} />
      </div>
    </div>
  );
};

export default QRCodeComponent;
