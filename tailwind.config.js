module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        eduBg: "url('/src/assets/orange-shape.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgba(145, 28, 255, 1)",
          secondary: "#7e02f1d7",
          accent: "#000000ff",
          neutral: "#9ca3af",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#f87272",
        },
      },
    ],
  },
};
