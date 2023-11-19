import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { getSession } from "next-auth/react";

import Section from "../../components/layout/Section";
import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";

const AdminPage = () => {
  const router = useRouter();

  const navigateHandler = (url) => {
    router.push(url);
  };

  return (
    <Section>
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Избери опция
      </h1>

      <div className="flex flex-row gap-10 justify-center pb-20">
        <motion.button
          className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
          onClick={() => navigateHandler("/admin/edit-product")}
          whileHover={{ backgroundColor: "#626262", color: "white" }}
        >
          Edit Product
        </motion.button>
        <motion.button
          className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
          onClick={() => navigateHandler("/admin/edit-gallery")}
          whileHover={{ backgroundColor: "#626262", color: "white" }}
        >
          Edit Gallery
        </motion.button>
      </div>
    </Section>
  );
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
