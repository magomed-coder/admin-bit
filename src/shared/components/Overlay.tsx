import React, { useEffect } from "react";
import styled from "styled-components";

const OverlayWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? "100%" : "0")};
  height: ${(props) => (props.isOpen ? "100%" : "0")};
  transition: opacity 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.6);
  z-index: 98;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

interface OverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClick }) => {
  useEffect(() => {
    if (isOpen) {
      // предотворощает сдвиг разметки при исчезновении скоролбара
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "10px";
    } else {
      // сбрасывает
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      // сброс при размонтировании компонента
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return <OverlayWrapper isOpen={isOpen} onClick={onClick} />;
};

export default Overlay;
