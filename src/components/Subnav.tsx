import React from "react";
import { subNav } from "../helper/data";
import {
  ItemFlexStyle,
  LinkStyle,
  SubNavStyle,
} from "./styles/StyleContainer.styles";

const Subnav: React.FC = () => {
  const subLinks = subNav.map((val) => (
    <LinkStyle href="#" key={val.id} style={{ flexShrink: "0" }}>
      {val.name}
    </LinkStyle>
  ));
  return (
    <SubNavStyle style={{ display: "grid" }}>
      <ItemFlexStyle
        rowGap="0"
        columnGap="12px"
        style={{ border: "1px solid red" }}
      >
        {subLinks}
      </ItemFlexStyle>
    </SubNavStyle>
  );
};

export default Subnav;
