import React, { useState } from "react";
import {
  BtnStyle,
  EmptyContainerStyle,
  HoverStyle,
  ImageStyle,
  ItemFlexStyle,
  LinkStyle,
  ProfileImg,
  TextH3,
  TextSpan,
} from "./styles/StyleContainer.styles";
import brandLogo from "../assets/images/placeholder.png";
import { dateFormatter } from "../helper/util";
import { cardType } from "../helper/Typeface";
import { queueIcon, timeIcon } from "../helper/constants";

const PostCard = ({ card }: { card: cardType }) => {
  const [hovered, setHovered] = useState<String>("");

  const handleMouseEnter = (val: string) => {
    setHovered(val);
  };
  const handleMouseLeave = () => {
    setHovered("");
  };

  return (
    <LinkStyle href="#" style={{ position: "relative" }}>
      <HoverStyle
        className={hovered === card.id.videoId ? "hovered" : ""}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => handleMouseEnter(card.id.videoId)}
        >
          <ImageStyle
            src={card.snippet.thumbnails.medium.url}
            alt={`${card.snippet.channelTitle} thumbnail`}
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
        <ItemFlexStyle rowGap="0" columnGap="12px" className="card-body">
          <ProfileImg
            imgWidth="36px"
            imgHeight="36px"
            src={brandLogo}
            alt="Brand logo"
            style={{ marginTop: " 12px" }}
          />
          <EmptyContainerStyle>
            <TextH3>{card.snippet.title} </TextH3>
            <TextSpan>{card.snippet.channelTitle}</TextSpan>
            <EmptyContainerStyle>
              <TextSpan className="view">2.7M views </TextSpan>
              <TextSpan>{dateFormatter(card.snippet.publishedAt)}</TextSpan>
            </EmptyContainerStyle>
          </EmptyContainerStyle>
        </ItemFlexStyle>
        <ItemFlexStyle
          rowGap="0"
          columnGap="12px"
          style={{ padding: 12 }}
          className="footer"
        >
          <BtnStyle>{timeIcon} WATCH LATER</BtnStyle>
          <BtnStyle>{queueIcon}ADD TO QUEUE</BtnStyle>
        </ItemFlexStyle>
      </HoverStyle>
    </LinkStyle>
  );
};

export default React.memo(PostCard);
