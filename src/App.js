import React, { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import QRCodeComponent from './components/QRCodeComponent';
import VideoPlayer from './components/VideoPlayer';
import QRCodeScanner from './components/QRCodeScannerTemp';
import './styles/styles.css';

function App() {
  const [mode, setMode] = useState('upload'); // "upload" or "scan"
  const [videoUrl, setVideoUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setVideoUrl('');
    setQrCode('');
  };

  return (
    <div className="App">
      <h1>Video Upload and QR Code Playback</h1>
      <div className="mode-switcher">
        <button onClick={() => handleModeChange('upload')} className={mode === 'upload' ? 'active' : ''}>
          Upload and Generate QR Code
        </button>
        <button onClick={() => handleModeChange('scan')} className={mode === 'scan' ? 'active' : ''}>
          Scan QR Code to Play Video
        </button>
      </div>

      {mode === 'upload' && (
        <div style={{ marginBottom: '20px' }}>
          <VideoUpload setVideoUrl={setVideoUrl} setQrCode={setQrCode} />
          {qrCode && (
            <div style={{ marginTop: '20px' }}>
              <QRCodeComponent videoUrl={qrCode} />
            </div>
          )}
        </div>
      )}

      {mode === 'scan' && (
        <div style={{ marginTop: '20px' }}>
          <QRCodeScanner setVideoUrl={setVideoUrl} />
          {videoUrl && (
            <div style={{ marginTop: '20px' }}>
              <VideoPlayer videoUrl={videoUrl} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
