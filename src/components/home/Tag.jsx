import { Link } from "react-router-dom";

export default function Tag() {
  return (
    <div className="tag">
      <h1 className="tagTitle">tag</h1>
      <ul className="tag-list">
        <li className="tag-item">
          <Link to="/tagArticals/algoritm">Algorithm</Link>
        </li>
        <li className="tag-item">
          <Link to="/tagArticals/programming">Programming</Link>
        </li>
        <li className="tag-item">
          <Link to="/tagArticals/DataStrucutre">Data Structure</Link>
        </li>
      </ul>
    </div>
  );
}
