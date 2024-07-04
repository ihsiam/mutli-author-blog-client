export default function SearchBar() {
  return (
    <div className="search">
      <h1 className="searchTitle">Search</h1>
      <div className="form-group">
        <input className="searchInput" type="text" placeholder="search" />
        <button className="search-btn btn">Search</button>
      </div>
    </div>
  );
}
