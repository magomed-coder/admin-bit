import { DOTS, usePagination } from "./usePaginen";
import Box from "../Box";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";
import { theme } from "../../../app/Theme";

interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    currentPage,
    pageSize,
    siblingCount = 1,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // Ensure paginationRange is defined before proceeding
  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Box
      sx={{
        ".pagination-container": {
          display: "flex",
          listStyleType: "none",
          columnGap: "4px",

          ".pagination-item": {
            boxSizing: "border-box",
            fontSize: "14px",
            fontWeight: 500,
            padding: "6px 14px",
            borderRadius: "8px",
            color: theme.colors.text.main,
            svg: {
              fill: theme.colors.text.subtle,
            },

            "&:hover": {
              backgroundColor: theme.colors.additional,
              cursor: "pointer",
              svg: { fill: theme.colors.text.main },
            },
            "&.selected": {
              backgroundColor: theme.colors.additional,
            },
            "&.dots:hover": {
              backgroundColor: "transparent",
              cursor: "default",
            },

            "&.disabled": {
              pointerEvents: "none",

              "&:hover": {
                backgroundColor: "transparent",
                cursor: "default",
              },
            },
          },
        },
      }}
    >
      <ul className="pagination-container">
        {/* Left navigation arrow */}
        <li
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={onPrevious}
        >
          {/* <div className="arrow left" /> */}
          <ArrowLeftIcon />
        </li>

        {paginationRange.map((pageNumber, idx) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={idx} className="pagination-item dots">
                {DOTS}
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              key={idx}
              className={`pagination-item ${
                pageNumber === currentPage ? "selected" : ""
              }`}
              onClick={() => onPageChange(+pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}

        {/*  Right Navigation arrow */}
        <li
          className={`pagination-item ${
            currentPage === lastPage ? "disabled" : ""
          }`}
          onClick={onNext}
        >
          <ArrowRightIcon />
        </li>
      </ul>
    </Box>
  );
};

export default Pagination;
