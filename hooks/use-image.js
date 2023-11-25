import { useState, useRef, useEffect } from 'react';

const useImage = (initialImage = null) => {
  const [image, setImage] = useState(initialImage);
  const imageRef = useRef();

  useEffect(() => {
    if (initialImage) {
      setImage(initialImage);
    }
  }, [initialImage]);

  const clearImage = () => {
    setImage(null);
    if (imageRef.current) {
      imageRef.current.value = null;
    }
  };

  return { image, setImage, imageRef, clearImage };
};

export default useImage;
