import { Outlet } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Footer from "./components/others/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
