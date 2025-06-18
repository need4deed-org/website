/* eslint-disable no-plusplus */
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import styled from "styled-components";
import { Heading4 } from "../../styled/text";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

interface NumberDivProps {
  bgColor?: string;
}

const NumberDiv = styled.div<NumberDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 44px;
  gap: 8px;
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;

interface Props {
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
}

export default function PaginationNumbers({
  currentPage,
  totalPages,
  goToPage,
}: Props) {
  if (totalPages === 0) return null;

  const handlePrevPage = (): void => {
    goToPage(currentPage - 1);
  };

  const handleNextPage = (): void => {
    goToPage(currentPage + 1);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // --- Logic to generate visible page numbers ---
  const maxPagesToShow = 5;
  const pages: (number | string)[] = [];

  // Always show the first page
  pages.push(1);

  // Determine the range of pages to show around the current page
  let startPage = Math.max(
    2,
    currentPage - Math.floor((maxPagesToShow - 3) / 2),
  );
  let endPage = Math.min(
    totalPages - 1,
    currentPage + Math.ceil((maxPagesToShow - 3) / 2),
  );

  // Adjust startPage and endPage to ensure maxPagesToShow is maintained
  if (endPage - startPage + 1 < maxPagesToShow - 2) {
    if (startPage === 2) {
      endPage = Math.min(totalPages - 1, startPage + (maxPagesToShow - 3) - 1);
    } else if (endPage === totalPages - 1) {
      startPage = Math.max(2, endPage - (maxPagesToShow - 3) + 1);
    }
  }

  // Add ellipsis if needed after the first page
  if (startPage > 2) {
    pages.push("...");
  }

  // Add the page numbers within the calculated range
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Add ellipsis if needed before the last page
  if (endPage < totalPages - 1) {
    pages.push("...");
  }

  // Always show the last page if it's not the first page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  // Filter out duplicate first/last pages if they fall within the range
  const uniquePages = Array.from(new Set(pages));
  // --- End logic for visible page numbers ---

  return (
    <PaginationContainer>
      <CaretLeftIcon
        size={16}
        onClick={handlePrevPage}
        cursor={isFirstPage ? "default" : "pointer"}
        color={isFirstPage ? "var(--color-sand)" : "var(--color-midnight)"}
      />

      {uniquePages.map((page) =>
        page === "..." ? (
          <Heading4>{page}</Heading4>
        ) : (
          <NumberDiv
            bgColor={page === currentPage ? "var(--color-midnight)" : "none"}
            key={page}
            onClick={() => goToPage(Number(page))}
          >
            <Heading4
              margin={0}
              color={
                page === currentPage
                  ? "var(--color-white)"
                  : "var(--color-midnight)"
              }
            >
              {page}
            </Heading4>
          </NumberDiv>
        ),
      )}

      <CaretRightIcon
        size={16}
        onClick={handleNextPage}
        cursor={isLastPage ? "default" : "pointer"}
        color={isLastPage ? "var(--color-sand)" : "var(--color-midnight)"}
      />
    </PaginationContainer>
  );
}
