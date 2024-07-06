import Category from "./Category";
import PopularArtical from "./PopularArtical";
import SearchBar from "./SearchBar";
import Tag from "./Tag";
export default function Sidebar() {
  return (
    <div className="search-category-tag">
      <SearchBar />
      <PopularArtical />
      <Category />
      <Tag />
    </div>
  );
}
