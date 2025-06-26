import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";

export default function ToastifyContainer() {
  const props = {
    position: "top-right",
    autoClose: 3000,
    closeButton: true,
    hideProgressBar: false,
    pauseOnHover: true,
    stacked: false,
    closeOnClick: true,
    newestOnTop: true,
  };
  return <ToastContainer {...props} />;
}
