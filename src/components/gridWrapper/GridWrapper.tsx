import styled from "styled-components";

type GridWrapperProps = {
    columns?: number;
    gap?: string;
    rowGap?: string;
    minColumnWidth?: string;
    maxColumnWidth?: string;
};

export const GridWrapper = styled.div<GridWrapperProps>`
    display: grid;
    grid-template-columns: ${({columns, minColumnWidth, maxColumnWidth}) =>
            columns
                    ? `repeat(${columns}, 1fr)`
                    : `repeat(auto-fit, minmax(${minColumnWidth || "200px"}, ${maxColumnWidth || "1fr"}))`};
    gap: ${({gap}) => gap || "1rem"};
    row-gap: ${({rowGap, gap}) => rowGap || gap || "1rem"};
`;