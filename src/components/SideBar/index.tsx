import React from "react";
import {
  exploreIcon,
  homeIcon,
  profile,
  shortsIcon,
  subscriptionIcon,
  yMusicIcon,
} from "../../helper/constants";
import {
  LinkStyle,
  SidebarList,
  SidebarListContainer,
  SidebarStyle,
} from "../styles/StyleContainer.styles";
import yMusic from "../../assets/images/yMusic.jpeg";
import ySports from "../../assets/images/ySport.jpeg";
import yGame from "../../assets/images/yGame.jpeg";
import yNews from "../../assets/images/yNews.jpeg";
import yLive from "../../assets/images/yLive.jpeg";
import y360 from "../../assets/images/y360.jpeg";

const SideBar = ({ sideBarState }: { sideBarState: boolean }) => {
  const sideList = [
    { id: 1, name: "Home", icon: homeIcon, type: "svg" },
    { id: 2, name: "Explore", icon: exploreIcon, type: "svg" },
    { id: 3, name: "Shorts", icon: shortsIcon, type: "svg" },
    { id: 4, name: "Subscriptions", icon: subscriptionIcon, type: "svg" },
    { id: 5, name: "Youtube Music", icon: yMusicIcon, type: "svg" },
    { id: 6, name: "Music", icon: yMusic, type: "img", hr: true },
    { id: 7, name: "Sports", icon: ySports, type: "img" },
    { id: 8, name: "Gaming", icon: yGame, type: "img" },
    { id: 9, name: "News", icon: yNews, type: "img" },
    { id: 10, name: "Live", icon: yLive, type: "img" },
    { id: 11, name: "360 Video", icon: y360, type: "img" },
  ];

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
    <SidebarStyle className={sideBarState ? "collapse" : ""}>
      <nav>
        <SidebarListContainer>{listItem}</SidebarListContainer>
      </nav>
    </SidebarStyle>
  );
};

export default SideBar;
