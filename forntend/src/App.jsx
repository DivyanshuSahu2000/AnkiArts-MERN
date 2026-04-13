import Header from "./components/Header";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="fixed w-full top-0 left-0 z-50">
          <Header />
        </div>
        <main className="flex-grow md:pt-[115px] pt-[105px] sm:pt-[107px]">
          <Outlet />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
