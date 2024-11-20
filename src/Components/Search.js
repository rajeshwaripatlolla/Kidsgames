import React, { useState, useEffect } from "react";
import "./Search.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [autoSuggestions, setAutoSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  // Mock data for demonstration
  const data = [
    { id: 1, title: "Math Puzzle Game", category: "Math" },
    { id: 2, title: "Animal Safari Adventure", category: "Animals" },
    { id: 3, title: "Alphabet Learning", category: "Education" },
    { id: 4, title: "Space Exploration Game", category: "Science" },
    { id: 5, title: "Dinosaur Facts", category: "Education" },
  ];

  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  const handleSearch = (term) => {
    if (!term.trim()) return;

    const filteredResults = data.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);

    // Update recent searches
    const updatedSearches = [term, ...recentSearches.filter((item) => item !== term)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Generate auto-suggestions
    if (value.trim()) {
      const suggestions = data
        .filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
        .map((item) => item.title);
      setAutoSuggestions(suggestions);
    } else {
      setAutoSuggestions([]);
    }
  };

  return (
    <div className="search-page">
      <h2>Search</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search games, educational content, or activities..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(searchTerm)}
        />
        <button onClick={() => handleSearch(searchTerm)}>Search</button>
      </div>

      {/* Auto-Suggestions */}
      {autoSuggestions.length > 0 && (
        <ul className="suggestions">
          {autoSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <h3>Recent Searches</h3>
          <ul>
            {recentSearches.map((item, index) => (
              <li key={index} onClick={() => handleSearch(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Results */}
      <div className="search-results">
        <h3>Search Results</h3>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <h4>{result.title}</h4>
                <p>Category: {result.category}</p>
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && <p>No results found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;
