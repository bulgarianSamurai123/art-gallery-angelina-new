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
        email: "mark.petar.petrov@gmail.com",
        email_pass: "najg wlhm dosd zkxl",
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
      email: "artgalleryangelina@gmail.com",
      email_pass: "xogx raxn cshe hblh",
    },
  };
};

module.exports = nextConfig;
