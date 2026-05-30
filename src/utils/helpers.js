// Generate unique ID
export const generateId = () => {
  return crypto.randomUUID();
};

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Truncate text
export const truncateText = (text, length = 120) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

// Capitalize
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

//  Time ago 
export const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diff = Math.floor((now - past) / 1000);

  if (diff < 10) return "just now";
  if (diff < 60) return `${diff} sec ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  return `${Math.floor(diff / 86400)} day ago`;
};