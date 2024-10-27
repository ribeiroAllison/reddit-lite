export const transformDate = (utc: number) => {
  const now = Math.floor(Date.now() / 1000); // Current time in seconds
  const secondsAgo = now - utc;

  const days = Math.floor(secondsAgo / (3600 * 24));
  const hours = Math.floor((secondsAgo % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsAgo % 3600) / 60);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
};
