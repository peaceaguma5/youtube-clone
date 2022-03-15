import React from "react";
import {
  EmptyContainerStyle,
  ImageStyle,
  ItemFlexStyle,
  LinkStyle,
  ProfileImg,
  TextH3,
  TextSpan,
} from "./styles/StyleContainer.styles";
import brandLogo from "../assets/images/placeholder.png";
import { dateFormatter } from "../helper/util";

const PostCard = ({ card, key }: { card: object; key: string }) => {
  return (
    <LinkStyle href="#">
      <div style={{ position: "relative" }}>
        <ImageStyle
          src="https://i.ytimg.com/vi/zOjov-2OZ0E/mqdefault.jpg"
          alt=""
        />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
            padding: 4,
            bottom: 4,
            right: 4,
            fontWeight: "600",
            position: "absolute",
          }}
        >
          12:00
        </div>
      </div>
      <ItemFlexStyle rowGap="0" columnGap="12px">
        <ProfileImg
          imgWidth="36px"
          imgHeight="36px"
          src={brandLogo}
          alt="Brand logo"
          style={{ marginTop: " 12px" }}
        />
        <EmptyContainerStyle>
          <TextH3>3 years of Computer Science in 8 minutes </TextH3>
          <TextSpan>Channels Television</TextSpan>
          <EmptyContainerStyle>
            <TextSpan className="view">2.7M views </TextSpan>
            <TextSpan>{dateFormatter("2018-07-24T17:00:13Z")}</TextSpan>
          </EmptyContainerStyle>
        </EmptyContainerStyle>
      </ItemFlexStyle>
    </LinkStyle>
  );
};

export default PostCard;
