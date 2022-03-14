import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { GlobalStyle } from "../components/styles/GlobalStyle.styles";
import {
  TextH3,
  TextSpan,
  HomeContainerFlex,
} from "../components/styles/StyleContainer.styles";

const Home: React.FC = () => {
  return (
    <GlobalStyle>
      <Navbar />
      <HomeContainerFlex>
        <SideBar />
        <main>
          <TextSpan>1 hour ago</TextSpan>
          <TextH3>
            Ronaldo hat-trick seals vital win! | Manchester United 3-2 Tottenham
            | Highlights | Premier League
          </TextH3>
        </main>
      </HomeContainerFlex>
    </GlobalStyle>
  );
};

export default Home;
