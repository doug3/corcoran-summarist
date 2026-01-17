export default function SearchBar() {
    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-bar__input"
                placeholder="Search for book summaries..."
            />
            <button className="search-bar__button">Search</button>
        </div>
    );
}