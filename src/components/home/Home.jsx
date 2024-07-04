import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Outlet />
          </div>
          <div className="col-4 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
