"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Testimonial from "@components/Testimonial";
import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import InputContainer from "@components/UI/InputContainer";

const DUMMY_PRODUCTS_HOMEPAGE = [
  {
    id: "p1",
    img: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/382129032_329193052969935_2980121851202355927_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=dNrs_NZCwyUAX-oOBcZ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDidlAuOcX30tPi7N6LC2Rq5Mqx8kjZkv3d85glUOTwqA&oe=652483EA",
    name: "Patience",
    price: "$150",
    description: "Some description",
  },
  {
    id: "p2",
    img: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/382129032_329193052969935_2980121851202355927_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=dNrs_NZCwyUAX-oOBcZ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDidlAuOcX30tPi7N6LC2Rq5Mqx8kjZkv3d85glUOTwqA&oe=652483EA",
    name: "Patience",
    price: "$150",
    description: "Some description",
  },
  {
    id: "p3",
    img: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/382129032_329193052969935_2980121851202355927_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=dNrs_NZCwyUAX-oOBcZ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDidlAuOcX30tPi7N6LC2Rq5Mqx8kjZkv3d85glUOTwqA&oe=652483EA",
    name: "Patience",
    price: "$150",
    description: "Some description",
  },
  {
    id: "p4",
    img: "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/382129032_329193052969935_2980121851202355927_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=dNrs_NZCwyUAX-oOBcZ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDidlAuOcX30tPi7N6LC2Rq5Mqx8kjZkv3d85glUOTwqA&oe=652483EA",
    name: "Patience",
    price: "$150",
    description: "Some description",
  },
];

const Home = () => {
  const router = useRouter();

  return (
    <>
      <section>
        <div className="h-screen flex flex-col items-center justify-center pb-20">
          <div className="absolute w-full h-[85%] right-0 top-28 bg-background-home bg-cover bg-no-repeat -z-10" />
          <h1 className="text-3xl font-bold text-white">Home Page</h1>
          <p className="text-xl text-white">Some more text</p>
          <Button onClick={() => router.push("/products")}>Go to Shop</Button>
        </div>
        <div className="flex flex-col">
          <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
            Special Products
          </h1>
          <ul className="flex flex-col md:flex-row gap-10">
            {DUMMY_PRODUCTS_HOMEPAGE.map((product) => (
              <li key={product.id}>
                <Link className="flex flex-col" href={product.id}>
                  <img
                    className="w-1/3 md:w-full md:h-full aspect-3/4"
                    src={product.img}
                    alt={product.name}
                  />
                  <div className="pt-4">
                    <p className="text-base md:text-2xl font-bold">
                      {product.name}
                    </p>
                    <span className="text-sm md:text-xl font-light">
                      {product.price}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-40 flex items-center md:flex-row flex-col gap-10 md:gap-24">
          <img
            className="w-full lg:w-2/3 lg:h-2/3"
            src="/assets/for-painter.png"
            alt="For Painter Image"
          />
          <div className="flex flex-col justify-center">
            <h1 className="pb-5 text-xl md:text-3xl font-normal">
              For Painter
            </h1>
            <p className="text-base md:text-2xl font-normal md:font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Quis feugiat phasellus
              faucibus egestas scelerisque sed enim. Urna lorem aliquam risus
              malesuada proin aliquam malesuada urna facilisis. Mauris
              scelerisque consectetur viverra pretium diam turpis. Condimentum
              mattis lobortis commodo ac aliquam aliquet nunc nibh. Egestas ut
              faucibus purus egestas.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 md:gap-24">
          <div className="flex flex-col justify-center md:order-first order-last">
            <h1 className="pb-5 text-xl md:text-3xl font-normal">
              Custom Paintings
            </h1>
            <p className="text-base md:text-2xl font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Proin pellentesque at
              pellentesque arcu nisi nec fermentum vel risus. Cursus maecenas
              vel eu turpis commodo ante. Risus maecenas urna aliquet egestas
              nisl dignissim morbi sit ut. Euismod tristique erat pellentesque
              iaculis diam vitae eu. Hendrerit ullamcorper tristique ipsum.
            </p>
            <div>
              <Button onClick={() => router.push("/contact-us")}>
                Contact us
              </Button>
            </div>
          </div>
          <img
            className="w-full lg:w-2/3 lg:h-2/3"
            src="/assets/custom-painting.png"
            alt="Custom Painting Image"
          />
        </div>
        <div className="mt-32 flex flex-row gap-10">
          <Testimonial name="- Name" className="invisible lg:visible">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
          <Testimonial name="- Name">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
          <Testimonial name="- Name" className="invisible md:visible">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
        </div>
        <div className="my-32">
          <h1 className="pb-8 text-xl md:text-3xl font-normal text-left">
            Ask us a question
          </h1>
          <form>
            <InputContainer>
              <label htmlFor="email" className="text-base md:text-xl">
                Email
              </label>
              <Input type="email" id="email" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="question" className="text-base md:text-xl">
                Question
              </label>
              <Input type="text" id="question" />
            </InputContainer>
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
