import React, { useState, useContext } from "react";

import Navbar from "../components/Navbar";
import ConfessionForm from "../confession/ConfessionForm";
import ConfessionList from "../confession/ConfessionList";
import FilterBar from "../filters/FilterBar";
import { ConfessionContext } from "../context/ConfessionContext";

const Home = () => {
  const { confessions, addConfession, likeConfession } =
    useContext(ConfessionContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic
  const filteredConfessions =
    selectedCategory === "All"
      ? confessions
      : confessions.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-6">

        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ConfessionForm onAddConfession={addConfession} />

        <ConfessionList
          confessions={filteredConfessions}
          onLike={likeConfession}
        />
      </div>
    </div>
  );
};

export default Home;