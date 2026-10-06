function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search films..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search films"
      />
    </div>
  );
}

export default SearchBar;