'use client';
import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-74.0060%2C40.7128&layer=mapnik"
      ></iframe>
    </div>
  );
};

export default MapComponent;
