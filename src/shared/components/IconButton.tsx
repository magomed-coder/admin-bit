import React from "react";
import { CSSObject } from "styled-components";
import Box from "./Box";

interface ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  sx?: CSSObject;
  onClick?: () => void;
}

const IconButton: React.FC<ButtonProps> = ({ icon, children, onClick, sx }) => {
  return (
    <div onClick={onClick}>
      <Box
        as="button"
        sx={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",

          display: "flex",
          alignItems: "center",

          span: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          svg: {
            // fill
            width: "18px",
            height: "18px",
          },
          ...sx,
        }}
      >
        {icon && <span>{icon}</span>}
        {children}
      </Box>
    </div>
  );
};

export default IconButton;
