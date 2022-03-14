import styled from "styled-components";

export const HomeContainerFlex = styled.div`
  display: -webkit-flex;
  display: flex;
`;

export const SidebarStyle = styled.aside`
  flex-grow: 1;
  max-width: 240px;
  flex-basis: 240px;
  flex-shrink: 0;
  background-color: white;
  @media screen and (min-width: 1329px) {
    &.collapse {
      max-width: 70px;
      flex-basis: 70px;
      nav {
        ul li a {
          padding-left: 0;
          padding-right: 0;
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
          svg,
          span {
            flex-grow: 1;
            display: block;
            font-size: 10px;
            line-height: 18px;
          }
        }
      }

      ul li.icon {
        display: none;
      }
    }
  }
`;

export const SidebarList = styled.li`
  a {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    column-gap: 24px;
    padding: 8px 24px;
    transition: all 0.3s;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      transition: all 0.3s;
      background-color: #f2f2f2;
    }
  }

  button {
    background-color: white;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    column-gap: 8px;
    border: 1px solid #065fd4;
    color: #065fd4;
    margin-top: 12px;
    margin-left: 24px;
    margin-bottom: 16px;
    height: 36px;
    padding: 0 6px;
    cursor: pointer;
  }
  &:first-of-type {
    a {
      background-color: #e5e5e5;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        background-color: #d9d9d9;
      }
    }
  }
  p {
    max-width: 176px;
  }
  span,
  h3,
  p {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  h3,
  p {
    padding-left: 24px;
  }
  div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const SidebarListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TextH3 = styled.h3`
  font-size: 1.6rem;
  /* font-size: 1.6em; */
  line-height: 2.2rem;
  font-weight: 500;
  max-height: 4.4rem;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  color: #030303;
`;

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 8px;
`;

export const TextSpan = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  color: #606060;
`;

export const ButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  position: relative;
`;

export const LinkStyle = styled.a``;

export const SearchDivStyle = styled.div`
  flex-grow: 1;
  flex-basis: 182px;
  max-width: 644px;
  form {
    width: 100%;
  }
  button {
    &:first-of-type {
      height: 40px;
      max-width: 64px;
      width: 100%;
      border: 1px solid hsl(0, 0%, 80%);
      border-left: transparent;
      border-radius: 0 2px 2px 0;
      background-color: #f8f8f8;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        background-color: #efefef;
      }
    }
    &:last-of-type {
      height: 40px;
      width: 48px;
      margin-left: 4px;
      background-color: #f9f9f9;
      border-radius: 50%;
      transition: all 0.3s;
      &:focus {
        transition: all 0.3s;
        background-color: #efefef;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export const EmptyContainerStyle = styled.div`
  button {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      border: 1px solid rgba(0, 0, 0, 1);
      left: 0;
      top: 0;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.5s;
    }
    &:active:after {
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: 0;
      opacity: 1;
      transition: 0s;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
    }
  }
`;

export const InputStyle = styled.input`
  color: hsl(0, 0%, 6.7%);
  border: 1px solid hsl(0, 0%, 80%);
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: #ffffff;
  box-shadow: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 4px;
  max-width: 100%;
  outline: none;
  width: 100%;
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 2px 0 0 2px;
  transition: all 0.3s;
  &:focus {
    transition: all 0.3s;
    border: 1px solid #4080bf;
  }
`;

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

export const NavFlexStyle = styled.nav`
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 56px;
  padding: 0 24px;
`;

export const ItemFlexStyle = styled.div<{ rowGap: string; columnGap: string }>`
  display: -webkit-flex;
  display: flex;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;

export const SkeletonStyle = styled.section`
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
