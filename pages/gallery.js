import React from 'react'
import Link from 'next/link'

import { DUMMY_PRODUCTS_HOMEPAGE } from '/dummy-products'

const GalleryPage = () => {
  return (
    <section className="mx-8 lg:mx-20 xl:mx-32">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Gallery Page
      </h1>

      <ul className="grid grid-cols-5 gap-6 items-center">
        {DUMMY_PRODUCTS_HOMEPAGE.map((page) => (
          <li key={page.id}>
            <Link className="flex flex-col" href={`/products/${page.id}`}>
              <img
                className="w-full max-h-80 overflow-hidden"
                src={page.img}
                alt={page.name}
              />
              <h1>{page.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GalleryPage
