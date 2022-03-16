import React from "react";
import { logo, menuIcon, profile } from "../../helper/constants";
import {
  ButtonStyle,
  EmptyContainerStyle,
  ItemFlexStyle,
  LinkStyle,
  SidebarList,
  SidebarListContainer,
  SidebarStyle,
} from "../styles/StyleContainer.styles";

import { useSideBarStore } from "../../helper/stores";
import { sideList } from "../../helper/data";

const MobileSideBar = ({ sideBarState }: { sideBarState: boolean }) => {
  // toggle sidebar state
  const sideBarToggle = useSideBarStore(({ sideBarAction }) => sideBarAction);

  //   const sideBarState = useSideBarStore(({ isActive }) => isActive);

  const listItem = sideList.map((val) => {
    if (val.type === "img") {
      if (val?.hr) {
        return (
          <SidebarList key={val.id} className="icon">
            <div></div>
            <p>Sign in to like videos, comment and subscribe.</p>
            <button>{profile}SIGN UP</button>
            <div></div>
            <h3>BEST OF YOUTUBE</h3>
            <LinkStyle>
              <img src={`${val.icon}`} alt={val.name} />

              <span>{val.name}</span>
            </LinkStyle>
          </SidebarList>
        );
      } else {
        return (
          <SidebarList key={val.id} className="icon">
            <LinkStyle>
              <img src={`${val.icon}`} alt={val.name} />

              <span>{val.name}</span>
            </LinkStyle>
          </SidebarList>
        );
      }
    } else {
      return (
        <SidebarList key={val.id}>
          <LinkStyle>
            {val.icon}
            <span>{val.name}</span>
          </LinkStyle>
        </SidebarList>
      );
    }
  });
  return (
    <SidebarStyle
      className={
        sideBarState
          ? " mobile-sidebar mobile-sidebar--active"
          : "mobile-sidebar"
      }
    >
      <nav>
        <ItemFlexStyle
          columnGap="16px"
          rowGap="0"
          style={{ alignItems: "center", paddingTop: 10, paddingLeft: 24 }}
        >
          <EmptyContainerStyle>
            <ButtonStyle onClick={sideBarToggle}>{menuIcon}</ButtonStyle>
          </EmptyContainerStyle>
          <LinkStyle href="#">{logo}</LinkStyle>
        </ItemFlexStyle>
        <SidebarListContainer>{listItem}</SidebarListContainer>
      </nav>
    </SidebarStyle>
  );
};

export default MobileSideBar;
