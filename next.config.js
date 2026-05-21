/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "markpetarpetrov",
        mongodb_password: "srt1fYxnHZp7jQ3v",
        mongodb_clustername: "cluster0",
        mongodb_database: "art-gallery-angelina",
        firebase_url:
          "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app",
        firebase_products_url:
          "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products_dev",
        firebase_projects_url:
          "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/projects",
        email: "mark.petar.petrov@gmail.com",
        email_pass: "najg wlhm dosd zkxl",
        firebase_storage: "dev",
        firebase_product_db_name: "products_dev",
        firebase_project_db_name: "projects",
        NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-T4NXB79J1B",
        firebase_gallery_db_name: "gallery",
        firebase_ads_db_name: "advertisements_dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "markpetarpetrov",
      mongodb_password: "srt1fYxnHZp7jQ3v",
      mongodb_clustername: "cluster0",
      mongodb_database: "art-gallery-angelina",
      firebase_url:
        "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app",
      firebase_products_url:
        "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products",
      firebase_projects_url:
        "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/projects",
      email: "artgalleryangelina@gmail.com",
      email_pass: "xogx raxn cshe hblh",
      firebase_storage: "images",
      firebase_product_db_name: "products",
      firebase_project_db_name: "projects",
      NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-T4NXB79J1B",
      firebase_gallery_db_name: "gallery",
    },
  };
};

module.exports = nextConfig;
