import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      <Header />
      <main className="pt-6 sm:pt-10 lg:pt-13">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
