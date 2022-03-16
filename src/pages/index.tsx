import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import SideBar from "../components/SideBar";
import Skeleton from "../components/Skeleton";
import { GlobalStyle } from "../components/styles/GlobalStyle.styles";
import {
  EmptyContainerStyle,
  HomeContainerFlex,
  HomeMain,
  ItemFlexStyle,
  LinkStyle,
} from "../components/styles/StyleContainer.styles";
import { useSideBarStore } from "../helper/stores";
import { useFetchData } from "../helper/stores";
import { cardType } from "../helper/Typeface";
import { useInView } from "react-intersection-observer";
import Spinner from "../components/Spinner";
import { myData } from "../helper/data";
import Subnav from "../components/Subnav";
import MobileSideBar from "../components/SideBar/MobileSideBar";

const Home: React.FC = () => {
  const { ref, inView } = useInView();
  const sideBarState = useSideBarStore(({ isActive }) => isActive);
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useFetchData();

  // const cardList =
  //   data &&
  //   data.pages.map((group) => (
  //     <React.Fragment key={group.nextPageToken ?? "lastPage"}>
  //       {group.items.map((card: cardType) => (
  //         <PostCard key={card.id.videoId} card={card} />
  //       ))}
  //     </React.Fragment>
  //   ));

  const cardList = myData.map((card: cardType) => (
    <PostCard key={card.id.videoId} card={card} />
  ));
  // useEffect(() => {
  //   // fetch new page
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inView]);

  return (
    <GlobalStyle>
      <Navbar />
      <HomeContainerFlex>
        <>
          <SideBar sideBarState={sideBarState} />
          <MobileSideBar sideBarState={sideBarState} />
        </>
        <EmptyContainerStyle
          style={{
            flexGrow: "1",
          }}
        >
          {/* sub nav  */}
          <Subnav />
          <div
            style={{
              minHeight: "90vh",
              height: "100%",
              width: "100%",
              maxHeight: "100vh",
              overflowY: "scroll",
            }}
          >
            <HomeMain className={sideBarState ? "collapse" : ""}>
              {cardList}
              {/* {isLoading ? (
              <Skeleton />
            ) : isError ? (
              <p style={{ textAlign: "center", color: "red", fontSize: 16 }}>
                An error occurred while fetching your data
              </p>
            ) : (
              <>
                {cardList}
                <EmptyContainerStyle
                  style={{ gridColumn: "1 / -1", textAlign: "center" }}
                >
                  {isFetchingNextPage ? (
                    <Spinner />
                  ) : hasNextPage ? (
                    ""
                  ) : (
                    "Nothing more to load"
                  )}
                </EmptyContainerStyle>
                {isFetching && !isFetchingNextPage ? <Skeleton /> : null}
              </>
            )} */}
            </HomeMain>
            <EmptyContainerStyle ref={ref} style={{ visibility: "hidden" }}>
              Intersetion observer marker
            </EmptyContainerStyle>
          </div>
        </EmptyContainerStyle>
      </HomeContainerFlex>
    </GlobalStyle>
  );
};

export default Home;
