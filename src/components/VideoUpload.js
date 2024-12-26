import React, { useState } from 'react';
import supabase from '../supabaseClient'; // Import Supabase client

const VideoUpload = ({ setVideoUrl, setQrCode }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setUploading(true);

      // Generate a unique file name with a timestamp
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `videos/${fileName}`;

      // Upload the file to Supabase storage
      const { error } = await supabase.storage
        .from('videos')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('Upload error:', error.message);
        setUploading(false);
        return;
      }

      // Retrieve the public URL for the uploaded video
      const { data } = supabase.storage.from('videos').getPublicUrl(filePath);

      if (data?.publicUrl) {
        setVideoUrl(data.publicUrl); // Set the video URL
        setQrCode(data.publicUrl);  // Set the QR code value
      } else {
        console.error('Failed to retrieve public URL');
      }

      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Your Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        disabled={uploading} // Disable input while uploading
        style={{ marginBottom: '10px' }}
      />
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default VideoUpload;
