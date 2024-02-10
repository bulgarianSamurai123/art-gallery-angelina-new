import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ZoomImage = ({ imageSrc, alt }) => {
  const [zoomable, setZoomable] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0 });
  const MAGNIFIER_SIZE = 300;
  const ZOOM_LEVEL = 1.7;

  useEffect(() => {
    if (zoomable) {
      const { width, height } = document.getElementById('zoom-image').getBoundingClientRect();
      setImageSize({ width, height });
    }
  }, [zoomable]);

  const handleMouseEnter = (e) => {
    let element = e.currentTarget;
    let { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e) => {
    updatePosition(e);
  };

  const updatePosition = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
      y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
      mouseX: x - (MAGNIFIER_SIZE / 2),
      mouseY: y - (MAGNIFIER_SIZE / 2),
    });
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className="relative sm:w-[20em] md:w-[25em] lg:w-[35em] lg:h-[35em] overflow-hidden"
    >
      <img
        id="zoom-image"
        className="object-contain object-center w-full h-full"
        alt={alt}
        src={imageSrc}
      />
      {zoomable && (
        <div
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
            backgroundRepeat: 'no-repeat',
            display: 'block',
            top: `${position.mouseY}px`,
            left: `${position.mouseX}px`,
            width: `${MAGNIFIER_SIZE}px`,
            height: `${MAGNIFIER_SIZE}px`,
          }}
          className="absolute z-10 border-2 rounded-md pointer-events-none border-gray-500"
        />
      )}
    </div>
  );
};

export default ZoomImage;