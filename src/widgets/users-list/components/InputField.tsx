import React, { useState } from "react";
import searchIcon from "./../../../assets/icons/search-circle.svg";
import Box from "../../../shared/components/Box";
import { theme } from "../../../app/Theme";

interface SearchInputProps {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  filterValue,
  setFilterValue,
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFocus(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        input: {
          width: "100%",
          border: `1px solid ${theme.colors.tertiary}`,
          borderRadius: "8px",
          margin: 0,
          outline: "none", // Remove default focus outline
          padding: "14px 16px",
          backgroundColor: "transparent",
          color: theme.colors.text.main,
          fontSize: "14px",
          fontWeight: 400,

          paddingLeft: focus ? "16px" : "42px",
          transition: "padding ease-in-out 0.3s",

          "::placeholder": {
            color: theme.colors.text.subtle,
          },
        },
      }}
    >
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder="Поиск"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{}}
      />
      <img
        src={searchIcon}
        alt="search icon"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          transition: "left ease-in-out 0.4s",
          left: focus ? "-30px" : "16px",
          opacity: focus ? 1 : 0.5,

          width: "16px",
          height: "16px",
        }}
      />
    </Box>
  );
};

export default SearchInput;
