import React from "react";
import Slider from "react-slider";
import { format } from "date-fns";
import Box from "../../../../shared/components/Box";

interface TransactionProps {
  minDate: number;
  maxDate: number;
  values: number[];
  onChange: (newValues: number[]) => void;
}

const DoubleSlider: React.FC<TransactionProps> = ({
  minDate,
  maxDate,
  values,
  onChange,
}) => {
  return (
    <>
      <BoxContainer>
        <Slider
          className="slider"
          thumbClassName="data-thumb"
          value={values}
          onChange={onChange}
          renderThumb={(props, state) => (
            <div {...props}>{format(state.valueNow, "dd LLL HH:mm")}</div>
          )}
          min={minDate}
          max={maxDate}
        />
      </BoxContainer>
    </>
  );
};
export default DoubleSlider;

interface BoxContainerProps {
  children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        ".slider": {
          width: "100%",
          height: "100%",
          position: "absolute !important" as "absolute",
          top: 0,
          left: 0,
        },
        ".slider .track": {
          top: 0,
          height: "100%",
        },
        ".track-1": {
          background: "rgba(28, 100, 242, 0.1)",
          borderRight: "3px solid #1C64F2",
          borderLeft: "3px solid #1C64F2",
        },
        ".slider .data-thumb": {
          top: 0,
          bottom: 0,
          height: "100%",
          width: "3px",
          whiteSpace: "nowrap",

          color: "white",
          fontSize: "12px",
          fontWeight: 400,
          cursor: "pointer",
          boxSizing: "border-box",
          outline: "none",

          display: "flex",
          alignItems: "center",
        },
        ".slider .data-thumb-0": {
          transform: "translateX(-100%)",
          paddingRight: "10px",
          flexDirection: "row-reverse",
        },
        ".slider .data-thumb-1": {
          transform: "translateX(100%)",
          paddingLeft: "10px",
        },
      }}
    >
      {children}
    </Box>
  );
};
