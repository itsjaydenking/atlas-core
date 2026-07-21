export function SearchBar() {
  return (
    <label className="search-bar" aria-label="Search placeholder">
      <input
        type="search"
        placeholder="Search entities, relationships, and rules"
        disabled
      />
    </label>
  )
}
