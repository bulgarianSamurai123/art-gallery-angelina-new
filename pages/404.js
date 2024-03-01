import React from "react";
import { useRouter } from "next/router";
import ToHomeButton from "../components/ui/Buttons/ToHomeButton";

const ErrorPage404 = () => {
  const router = useRouter();

  return (
    <div className="w-full text-center my-32">
      <span className="text-9xl font-bold">404</span>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 justify-center items-center mt-5">
        <p className="font-bold text-lg">Страницата не беше открита</p>
        <ToHomeButton router={router} />
      </div>
    </div>
  );
};

export default ErrorPage404;
