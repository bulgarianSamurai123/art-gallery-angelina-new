import React from 'react'
import { getSession } from "next-auth/react";

const EditProductPage = () => {
  return (
    <div>
      Edit Product Page
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/log-in",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default EditProductPage
