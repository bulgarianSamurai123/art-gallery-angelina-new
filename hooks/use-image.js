import { useRef, useState } from "react";

function useImage() {
  const [image, setImage] = useState(null);
  const nameRef = useRef()

  return {
    image,
    setImage,
    nameRef
  }
}

export default useImage;
