/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: "#FFFFFF",
    //   Primary1: "#363738",
    //   Secondary: "#F5F5F5",
    //   Secondary1: "#FEFAF1",
    //   Secondary2: "#DB4444",
    //   Text: "#FAFAFA",
    //   Text1: "#7D8184",
    //   Text2: "#000000",
    //   Button: "#000000",
    //   Button1: "#00FF66",
    //   Button2: "#DB4444",
    //   ButtonHover: "#E07575",
    //   ButtonHover2: "#A0BCE0",
    // },
    fontFamily: {
      sans: ["Poppins", "monospace"],
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        Primary1: "#363738",
        Secondary: "#F5F5F5",
        Secondary1: "#FEFAF1",
        Secondary2: "#DB4444",
        Text: "#FAFAFA",
        Text1: "#7D8184",
        Text2: "#000000",
        Button: "#000000",
        Button1: "#00FF66",
        Button2: "#DB4444",
        ButtonHover: "#E07575",
        ButtonHover2: "#A0BCE0",
      },
    },
  },
  plugins: [],
};
