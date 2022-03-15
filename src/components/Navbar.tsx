import React, { useState } from "react";
import {
  appsIcon1,
  appsIcon2,
  logo,
  menuIcon,
  micIcon,
  notificationIcon1,
  notificationIcon2,
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
  ProfileImg,
} from "./styles/StyleContainer.styles";
import img from "../assets/images/cosmas.jpeg";
import { useSideBarStore } from "../helper/stores";

const Navbar = () => {
  // toggle sidebar state
  const sideBarToggle = useSideBarStore(({ sideBarAction }) => sideBarAction);

  const [btnActive, setBtnActive] = useState<string>("");
  const alignCenter = {
    alignItems: "center",
  };
  const btnToggle = (val: string) => {
    btnActive === val ? setBtnActive("") : setBtnActive(val);
  };
  return (
    <NavFlexStyle>
      <ItemFlexStyle columnGap="16px" rowGap="0" style={alignCenter}>
        <EmptyContainerStyle>
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
      <EmptyContainerStyle></EmptyContainerStyle>
      <ItemFlexStyle columnGap="16px" rowGap="0" style={alignCenter}>
        <EmptyContainerStyle>
          <ButtonStyle onClick={() => btnToggle("video")}>
            {btnActive === "video" ? videoIcon2 : videoIcon1}
          </ButtonStyle>
        </EmptyContainerStyle>
        <EmptyContainerStyle>
          <ButtonStyle onClick={() => btnToggle("apps")}>
            {btnActive === "apps" ? appsIcon2 : appsIcon1}
          </ButtonStyle>
        </EmptyContainerStyle>
        <EmptyContainerStyle>
          <ButtonStyle onClick={() => btnToggle("notif")}>
            {btnActive === "notif" ? notificationIcon2 : notificationIcon1}
          </ButtonStyle>
        </EmptyContainerStyle>
        <ProfileImg
          src={img}
          alt="Profile image"
          imgHeight="32px"
          imgWidth="32px"
          style={{ marginRight: "8px" }}
        />
      </ItemFlexStyle>
    </NavFlexStyle>
  );
};

export default Navbar;
