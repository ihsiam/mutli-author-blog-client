import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="category">
      <h1 className="ctgTitle">Category</h1>
      <ul className="ctg-list">
        <div className="ctg-item">
          <li>
            <FaChevronRight />
            <Link to="/ctgArticals/algoritm">Algorithm</Link>
          </li>
          <span>(5)</span>
        </div>
        <div className="ctg-item">
          <li>
            <FaChevronRight />
            <Link to="/ctgArticals/programming">Programming</Link>
          </li>
          <span>(5)</span>
        </div>
        <div className="ctg-item">
          <li>
            <FaChevronRight />
            <Link to="/ctgArticals/DataStructure">Data Structure</Link>
          </li>
          <span>(5)</span>
        </div>
      </ul>
    </div>
  );
}
