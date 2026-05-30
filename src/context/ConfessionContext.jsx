import React, { createContext, useContext, useState, useEffect } from "react";
import { dummyConfessions } from "../data/dummyConfessions";

// context
export const ConfessionContext = createContext();

// provider
export const ConfessionProvider = ({ children }) => {

  const [confessions, setConfessions] = useState(() => {
  const stored = localStorage.getItem("confessions");

  if (stored) {
    return JSON.parse(stored);
  }

  // first time only merge dummy data
  localStorage.setItem("confessions", JSON.stringify(dummyConfessions));
    return dummyConfessions;
  });

  // Add confession

  const addConfession = (confession) => {
    setConfessions((prev) => [confession, ...prev]);
  };


  // Like confession (1 like per user)

  const likeConfession = (id) => {
    const liked = JSON.parse(localStorage.getItem("liked") || "[]");

    if (liked.includes(id)) return;

    setConfessions((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, likes: item.likes + 1 }
          : item
      )
    );

    liked.push(id);
    localStorage.setItem("liked", JSON.stringify(liked));
  };

  // Save confessions to localStorage

  useEffect(() => {
    localStorage.setItem(
      "confessions",
      JSON.stringify(confessions)
    );
  }, [confessions]);

  return(
    <ConfessionContext.Provider
      value={{
        confessions,
        addConfession,
        likeConfession,
      }}
    >
      {children}
    </ConfessionContext.Provider>
  );
};

// Custom hook (clean access)

export const useConfessions = () => {
  const context = useContext(ConfessionContext);

  if (!context) {
    throw new Error(
      "useConfessions must be used within ConfessionProvider"
    );
  }

  return context;
};