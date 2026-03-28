/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1917",
        sand: "#f5f5f4",
        mist: "#e7e5e4",
      },
      borderRadius: {
        soft: "2rem",
      },
      boxShadow: {
        calm: "0 20px 60px rgba(28, 25, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
