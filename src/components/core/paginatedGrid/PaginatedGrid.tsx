import { useState, ReactNode, useEffect } from "react";
import styled from "styled-components";
import PaginationNumbers from "./PaginationNumbers";

interface Props {
  items: ReactNode[];
  columns: number;
  rows: number;
}

interface GridContainerProps {
  columns: number;
  rows: number;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: var(--opportunities-container-gap);
`;

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, auto);
  gap: 16px;
  width: 100%;
  height: 100%;
`;

function PaginatedGrid({ items, columns, rows }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => setCurrentPage(1), [items.length]);

  const itemsPerPage = columns * rows;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <MainContainer>
      <GridContainer columns={columns} rows={rows}>
        {currentItems}
      </GridContainer>
      <PaginationNumbers
        currentPage={currentPage}
        goToPage={goToPage}
        totalPages={totalPages}
      />
    </MainContainer>
  );
}

export default PaginatedGrid;
