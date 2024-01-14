import { useState, useRef, useEffect } from 'react';

const useImage = (initialImage = null) => {
  const [image, setImage] = useState(initialImage);
  const imageRef = useRef();

  useEffect(() => {
    if (initialImage) {
      setImage(initialImage);
    }
  }, [initialImage]);

  return { image, setImage, imageRef };
};

export default useImage;
