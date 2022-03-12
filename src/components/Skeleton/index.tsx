import React from "react";
import { SkeletonStyle } from "../styles/StyleContainer.styles";
import SkeletonCard from "./SkeletonCard";

const Skeleton = () => {
  return (
    <SkeletonStyle>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </SkeletonStyle>
  );
};

export default Skeleton;
