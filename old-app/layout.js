import Footer from "@components/Footer";
import NavBar from "@components/Navigation/NavBar";
import "@styles/globals.css";

export const metadata = {
  title: "Angelina's Art Gallery",
  description: "The best paintings you can find.",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main className="mx-8 lg:mx-20 xl:mx-32 my-10">
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
