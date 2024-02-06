import React from "react";

import Header from "./Header/index";
import { theme } from "../../app/Theme";
import Box from "./Box";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 0,
        padding: "24px 0 0",
        minHeight: "100vh",
        [theme.breakpoints.SMALL]: { padding: "34px 40px" },
        [theme.breakpoints.XLARGE]: { padding: "34px 25px" },
      }}
    >
      <Box
        sx={{
          // position: "sticky",
          // top: "24px",
          zIndex: 100,
          width: "90%",
          margin: "0 auto",
          padding: "10px 16px",
          backgroundColor: theme.colors.secondary,
          borderRadius: "10px",

          marginBottom: "27px",
          boxShadow: `0 0 2px ${theme.colors.tertiary}`,

          [theme.breakpoints.SMALL]: {
            padding: "14px 18px",
            borderRadius: "17px",
            width: "100%",
            top: "34px",
            marginBottom: "32px",
          },

          [theme.breakpoints.LARGE]: {
            padding: "16px 24px",
            marginBottom: "34px",
          },
        }}
      >
        <Header />
      </Box>

      <Box
        as="main"
        sx={{
          backgroundColor: theme.colors.secondary,
          padding: "18px 0",

          [theme.breakpoints.SMALL]: {
            padding: "24px 0",
            borderRadius: "18px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
