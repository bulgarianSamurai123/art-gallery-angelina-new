import React, { useRef } from "react";

import InputContainer from "/components/ui/InputContainer";
import Input from "/components/ui/Input";
import Button from "/components/ui/Button";
import Section from "/components/layout/Section";

const AddProductPage = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    

    const response = await fetch(
      "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          price: price,
          image: image,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log(data);
  }

  return (
    <Section>
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Add Product
      </h1>

      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <InputContainer>
          <label htmlFor="name">Enter Product Name: </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="text"
            id="name"
            ref={nameRef}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="price">Enter Product Price</label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="number"
            id="price"
            ref={priceRef}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image">Enter image: </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            ref={imageRef}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">Enter Description: </label>
          <textarea
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            rows={10}
            placeholder="Enter description..."
            id="description"
            ref={descriptionRef}
          />
        </InputContainer>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Section>
  );
};

export default AddProductPage;
