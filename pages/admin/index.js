import React from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";

import Section from "../../components/layout/Section";

const AdminPage = () => {
  return <Section>
    <Link href='/admin/edit-product'>Edit Products</Link>
    <Link href='/admin/edit-gallery'>Edit Gallery</Link>
  </Section>;
};

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/log-in",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default AdminPage;
