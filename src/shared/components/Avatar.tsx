import React from "react";
import styled from "styled-components";

interface AvatarProps {
  src: string;
  size?: number;
}

const StyledAvatar = styled.img<{ size?: number }>`
  width: ${(props) => props.size || 32}px;
  height: ${(props) => props.size || 32}px;
  border-radius: 50%;
`;

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
  return <StyledAvatar src={src} size={size} alt="User Avatar" />;
};

export default Avatar;
