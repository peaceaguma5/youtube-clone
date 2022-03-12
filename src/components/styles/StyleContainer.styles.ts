import styled from "styled-components";

export const SpinnerStyle = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 3px solid #606060;
  border-radius: 50%;
  border-top-color: #f9f9f9;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const ItemFlexStyle = styled.div<{ rowGap: string; columnGap: string }>`
  display: -webkit-flex;
  display: flex;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;

export const SkeletonStyle = styled.div`
  display: -ms-grid;
  display: -moz-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 40px;
  column-gap: 16px;
`;

export const SkeletonCardStyle = styled.div`
  display: grid;
  row-gap: 16px;
`;

export const SkeletonItemStyle = styled.div<{
  itemWidth: string;
  itemHeight: string;
  itemRadius: string;
}>`
  background-color: #e0e0e0;
  width: ${({ itemWidth }) => itemWidth};
  height: ${({ itemHeight }) => itemHeight};
  border-radius: ${({ itemRadius }) => itemRadius};
`;
