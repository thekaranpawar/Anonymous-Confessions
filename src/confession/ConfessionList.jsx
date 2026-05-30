import React, { useEffect, useState } from "react";
import ConfessionCard from "./ConfessionCard";

const ConfessionList = ({ confessions, onLike }) => {
  //  used to force re-render for "time ago" updates
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 60000); // updates every 1 minute

    return () => clearInterval(interval);
  }, []);

  if (!confessions || confessions.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No confessions yet. Be the first to post something 👀
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {confessions.map((confession) => (
        <ConfessionCard
          key={confession.id}
          confession={confession}
          onLike={onLike}
        />
      ))}
    </div>
  );
};

export default ConfessionList;