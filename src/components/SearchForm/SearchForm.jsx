const SearchForm = ({ value, onChange }) => {
    return (
        <>
        <form >
          <input
          value={value}
          onChange={e => onChange(e.target.value)}
            type="text"
            placeholder="Enter for search movies"
            name="query"
          />
          <button type="submit">
            Searches
          </button>
        </form>
      </>
    )
};

export default SearchForm;