import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row home">
          <div className="col-8 articalBar">
            <Outlet />
            <Pagination />
          </div>
          <div className="col-4 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
