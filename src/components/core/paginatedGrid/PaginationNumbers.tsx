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

  const pageArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePrevPage = (): void => {
    goToPage(currentPage - 1);
  };

  const handleNextPage = (): void => {
    goToPage(currentPage + 1);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <PaginationContainer>
      <CaretLeftIcon
        size={16}
        onClick={handlePrevPage}
        cursor={isFirstPage ? "default" : "pointer"}
        color={isFirstPage ? "var(--color-sand)" : "var(--color-midnight)"}
      />

      {pageArray.map((page) => (
        <NumberDiv
          bgColor={page === currentPage ? "var(--color-midnight)" : "none"}
          key={page}
          onClick={() => goToPage(page)}
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
      ))}

      <CaretRightIcon
        size={16}
        onClick={handleNextPage}
        cursor={isLastPage ? "default" : "pointer"}
        color={isLastPage ? "var(--color-sand)" : "var(--color-midnight)"}
      />
    </PaginationContainer>
  );
}
