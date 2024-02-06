import styled, { CSSObject, css } from "styled-components";

interface StyledParagraphProps {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  sx?: CSSObject;
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#FFFFFF"};
  ${(props) =>
    props.sx &&
    css`
      ${props.sx}
    `}
`;

interface ParagraphProps extends StyledParagraphProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  sx?: CSSObject;
}

const Typography: React.FC<ParagraphProps> = ({
  as = "p",
  fontWeight,
  fontSize,
  color,
  children,
  sx,
}) => {
  return (
    <StyledParagraph
      as={as}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      sx={sx}
    >
      {children}
    </StyledParagraph>
  );
};

export default Typography;
