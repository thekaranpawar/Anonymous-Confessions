import React from "react";
import { timeAgo } from "../utils/helpers";

const ConfessionCard = ({ confession, onLike }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition">
      
      <p className="text-gray-800 text-base leading-relaxed">
        {confession.text}
      </p>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
          #{confession.category}
        </span>

        <span>
            {timeAgo(confession.createdAt)}
        </span>

        <button
          onClick={() => onLike(confession.id)}
          className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
        >
          ❤️ <span>{confession.likes}</span>
        </button>
      </div>
    </div>
  );
};

export default ConfessionCard;