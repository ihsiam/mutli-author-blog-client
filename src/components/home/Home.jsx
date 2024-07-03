import ArticleSide from "./ArticleSide";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <ArticleSide />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
