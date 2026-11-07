/**
 * 5 Rich Distinct Colors (+ Default Pure White)
 * Visibly distinct, warm, modern, and high contrast with dark text #37352F.
 */
export const NOTE_COLORS = [
  { name: "White", value: "#FFFFFF" },
  { name: "Peach", value: "#FFBFA8" },
  { name: "Butter", value: "#FFE082" },
  { name: "Mint", value: "#A7F3D0" },
  { name: "Sky", value: "#BAE6FD" },
  { name: "Lavender", value: "#DDD6FE" },
];

/**
 * Normalizes legacy neon and overly-pale colors to rich, distinct note colors.
 */
export const normalizePastelColor = (color) => {
  if (!color || color === "none" || color === "" || color === "#ffffff" || color === "#FFFFFF") {
    return "#FFFFFF";
  }
  const map = {
    // Legacy original neon
    "#00ffff": "#BAE6FD",
    "#00d4fe": "#BAE6FD",
    "#fe9b72": "#FFBFA8",
    "#fec971": "#FFE082",
    "#b693fd": "#DDD6FE",
    "#e4ee91": "#A7F3D0",
    // Previous overly pale / washed-out colors
    "#ffefe8": "#FFBFA8",
    "#fef7e0": "#FFE082",
    "#e6f6ef": "#A7F3D0",
    "#e8f4fe": "#BAE6FD",
    "#f3eeff": "#DDD6FE",
  };
  return map[color.toLowerCase()] || color;
};
