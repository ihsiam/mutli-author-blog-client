import { Outlet } from "react-router-dom";
import Navbar from "./components/home/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
