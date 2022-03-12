import React from "react";
import {
  ItemFlexStyle,
  SkeletonCardStyle,
  SkeletonItemStyle,
} from "../styles/StyleContainer.styles";

const SkeletonCard: React.FC = () => {
  return (
    <SkeletonCardStyle>
      <SkeletonItemStyle itemWidth="100%" itemHeight="202px" itemRadius="2px" />
      <ItemFlexStyle rowGap="12px" columnGap="12px">
        <SkeletonItemStyle
          itemWidth="36px"
          itemHeight="36px"
          itemRadius="100%"
        />
        <div style={{ flexGrow: 1 }}>
          <SkeletonItemStyle
            itemWidth="90%"
            itemHeight="16px"
            itemRadius="2px"
            style={{ marginBottom: 12 }}
          />
          <SkeletonItemStyle
            itemWidth="60%"
            itemHeight="16px"
            itemRadius="2px"
          />
        </div>
      </ItemFlexStyle>
    </SkeletonCardStyle>
  );
};

export default SkeletonCard;
