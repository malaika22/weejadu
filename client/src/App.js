import React from "react";
import "./App.css";
import Route from "./routes/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        style={{ zIndex: 9999999999 }}
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={false}
      />
      <Route />
    </QueryClientProvider>
  );
}

export default App;
