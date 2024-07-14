import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Pagination() {
  return (
    <div className="pagination">
      <Link to="/">
        <FaAngleLeft />
      </Link>
      <Link to="/">
        <span>1</span>
      </Link>
      <Link to="/">
        <FaAngleRight />
      </Link>
    </div>
  );
}
