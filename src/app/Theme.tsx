import { createGlobalStyle, ThemeProvider } from "styled-components";

interface ThemeProps {
  children?: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
  }
  :root {
    --main-scrollbar-width: 10px;
    --main-scrollbar-thumb-color: #121825; 
    --main-scrollbar-track-color: white;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary || "#0E0C15"};
    font-family: 'IBM Plex Sans', sans-serif;
    overflow-X: hidden;
  }

  body::-webkit-scrollbar {
    width: var(--main-scrollbar-width);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--main-scrollbar-thumb-color);
  }

  body::-webkit-scrollbar-track {
    background-color: var(--main-scrollbar-track-color);
  }
`;

export const theme = {
  colors: {
    primary: "#0E0C15",
    secondary: "#121825",
    tertiary: "#222B44",
    additional: "#1C64F2",

    text: {
      main: "#FFFFFF",
      subtle: "#616D8D",
      tertiary: "#313E62",
      mild: "#9CA3AF",
      alert: "#FE4242",
    },
    borders: {
      main: "#222B44",
      subtle: "#616D8D",
    },
  },
  breakpoints: {
    SMALL: "@media (min-width: 550px)",
    MEDIUM: "@media (min-width: 650px)",
    LARGE: "@media (min-width: 700px)",
    XLARGE: "@media (min-width: 850px)",
    XXLARGE: "@media (min-width: 1050px)",
  },
  typography: {
    h1: {
      fontSize: "22px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "16px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "14px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "12px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body3: {
      fontSize: "12px",
      fontWeight: 500,
    },
  },
};
