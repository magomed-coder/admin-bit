import React, { forwardRef } from "react";
import styled, { css, CSSObject } from "styled-components";

interface StyledBoxProps {
  as?: React.ElementType;
  sx?: CSSObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
}

interface BoxProps extends StyledBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const StyledBox = styled.div<StyledBoxProps>`
  ${(props) =>
    props.sx &&
    css`
      ${props.sx}
    `}

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;

const Box: React.FC<BoxProps & { ref?: React.Ref<HTMLElement> }> = forwardRef(
  ({ as = "div", sx, children, onClick, className }, ref) => {
    return (
      <StyledBox
        as={as}
        sx={sx}
        onClick={onClick}
        className={className}
        ref={ref}
      >
        {children}
      </StyledBox>
    );
  }
);

export default Box;
