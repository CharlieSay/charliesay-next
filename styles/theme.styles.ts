const light = {
  elements: {
    background: "#f2f7f5",
    headline: "#00473e",
    paragraph: "#475d5b",
    button: "#faae2b",
    buttonText: "#00473e",
  },
  illustration: {
    stroke: "#00332c",
    main: " #f2f7f5",
    highlight: "#faae2b",
    secondary: "#ffa8ba",
    tertiary: "#fa5246",
  },
};

const dark = {
  elements: {
    background: "#0f0e17",
    headline: "#fffffe",
    paragraph: "#a7a9be",
    button: "#ff8906",
    buttonText: "#fffffe",
  },
  illustration: {
    stroke: "#000000",
    main: "#fffffe",
    highlight: "#ff8906",
    secondary: "#f25f4c",
    tertiary: "#e53170",
  },
};

const defaultTheme = {
  fontSizes: [
    "14px", // 0
    "16px", // 1
    "18px", // 2
    "22px", // 3
    "26px", // 4
    "32px", // 5
    "40px", // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  dimensions: {
    maxWidth: "1200px",
    minWidth: "320px",
    contentWidth: "1024px",
    mobileMax: "860px",
    baseUnit: "8px",
  },
};

export type ThemeType = typeof lightTheme;

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
