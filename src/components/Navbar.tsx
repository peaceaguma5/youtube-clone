import React, { useState } from "react";
import {
  appsIcon1,
  appsIcon2,
  logo,
  menuIcon,
  micIcon,
  moreIcon,
  mProfile,
  profile,
  searchIcon,
  videoIcon1,
  videoIcon2,
} from "../helper/constants";
import {
  ItemFlexStyle,
  NavFlexStyle,
  ButtonStyle,
  LinkStyle,
  InputStyle,
  EmptyContainerStyle,
  SearchDivStyle,
  NavBtnStyle,
} from "./styles/StyleContainer.styles";
import { useSideBarStore } from "../helper/stores";

const Navbar = () => {
  const [btnActive, setBtnActive] = useState<string>("");
  const alignCenter = {
    alignItems: "center",
  };
  const btnToggle = (val: string) => {
    btnActive === val ? setBtnActive("") : setBtnActive(val);
  };
  // toggle sidebar state
  const sideBarToggle = useSideBarStore(({ sideBarAction }) => sideBarAction);

  return (
    <NavFlexStyle>
      <ItemFlexStyle columnGap="16px" rowGap="0" style={alignCenter}>
        <EmptyContainerStyle className="hide-mobile">
          <ButtonStyle onClick={sideBarToggle}>{menuIcon}</ButtonStyle>
        </EmptyContainerStyle>
        <LinkStyle href="#">{logo}</LinkStyle>
      </ItemFlexStyle>
      <SearchDivStyle>
        <ItemFlexStyle columnGap="4px" rowGap="0" style={alignCenter}>
          <form>
            <InputStyle type="search" placeholder="Search" />
          </form>
          <ButtonStyle>{searchIcon}</ButtonStyle>
          <ButtonStyle>{micIcon}</ButtonStyle>
        </ItemFlexStyle>
      </SearchDivStyle>
      {/* <EmptyContainerStyle></EmptyContainerStyle> */}
      <ItemFlexStyle columnGap="16px" rowGap="0" style={alignCenter}>
        <EmptyContainerStyle className="hide-mobile">
          <ButtonStyle onClick={() => btnToggle("video")}>
            {btnActive === "video" ? videoIcon2 : videoIcon1}
          </ButtonStyle>
        </EmptyContainerStyle>
        <EmptyContainerStyle className="hide-mobile">
          <ButtonStyle onClick={() => btnToggle("apps")}>
            {btnActive === "apps" ? appsIcon2 : appsIcon1}
          </ButtonStyle>
        </EmptyContainerStyle>
        <EmptyContainerStyle className="hide-mobile">
          <ButtonStyle onClick={() => btnToggle("more")}>
            {btnActive === "more" ? moreIcon : moreIcon}
          </ButtonStyle>
        </EmptyContainerStyle>
        <EmptyContainerStyle className="mobile">
          <ButtonStyle>{searchIcon}</ButtonStyle>
        </EmptyContainerStyle>
        <EmptyContainerStyle className="mobile">
          <ButtonStyle>{mProfile}</ButtonStyle>
        </EmptyContainerStyle>

        <NavBtnStyle className="hide-mobile">{profile}SIGN UP</NavBtnStyle>
      </ItemFlexStyle>
    </NavFlexStyle>
  );
};

export default Navbar;
