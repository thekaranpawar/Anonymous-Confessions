import React from "react";

const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All", "General", "Funny", "Love", "Secret", "Dark"];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-3 py-1 rounded-full text-sm border transition ${
            selectedCategory === cat
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-white text-gray-600 border-gray-300 hover:border-purple-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
export default FilterBar;