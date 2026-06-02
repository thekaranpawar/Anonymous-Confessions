import React, { useState } from "react";

const ConfessionForm = ({ onAddConfession }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!text.trim()) return;

    const newConfession = {
      id: Date.now(),
      text,
      category,
      likes: 0,
      createdAt: new Date().toISOString()
    };

    onAddConfession(newConfession);

    // reset form
    setText("");
    setCategory("General");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      
      <h2 className="text-lg font-semibold mb-3 text-gray-800">
        Write an Anonymous Confession
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your confession..."
          className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="General">General</option>
          <option value="Funny">Funny</option>
          <option value="Love">Love</option>
          <option value="Secret">Secret</option>
          <option value="Dark">Dark</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition"
        >
          Post Anonymously
        </button>
      </form>
    </div>
  );
};

export default ConfessionForm;