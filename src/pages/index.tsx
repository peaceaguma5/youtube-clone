import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import SideBar from "../components/SideBar";
import Skeleton from "../components/Skeleton";
import { GlobalStyle } from "../components/styles/GlobalStyle.styles";
import {
  HomeContainerFlex,
  HomeMain,
} from "../components/styles/StyleContainer.styles";
import { useSideBarStore } from "../helper/stores";
import { useFetchData } from "../helper/stores";

interface cardType {
  etag: string;
  kind: string;
  additionalProperties: { [prop: string]: string };
}
const Home: React.FC = () => {
  const sideBarState = useSideBarStore(({ isActive }) => isActive);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useFetchData();
  // console.log(data?.pages, "......data");
  console.log(status, "......status");
  const cardList = data?.pages.map((group, i) => (
    <React.Fragment key={i}>
      {group.items.map(
        (card: object) => (
          <PostCard card={card} key={`${card}`} />
        )
        //
        // <p key={project.id}>{project.name}</p>
      )}
    </React.Fragment>
  ));
  return (
    <GlobalStyle>
      <Navbar />
      <HomeContainerFlex>
        <SideBar sideBarState={sideBarState} />
        <div
          style={{
            minHeight: "90vh",
            height: "100%",
            width: "100%",
            maxHeight: "100vh",
            border: "1px solid",
            overflowY: "scroll",
          }}
        >
          <HomeMain className={sideBarState ? "collapse" : ""}>
            {status === "loading" ? (
              <Skeleton />
            ) : status === "error" ? (
              <p style={{ textAlign: "center", color: "red", fontSize: 16 }}>
                An error occoured while fetching data
              </p>
            ) : (
              <>
                {cardList}
                <div>
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                  >
                    {isFetchingNextPage
                      ? "Loading more..."
                      : hasNextPage
                      ? "Load More"
                      : "Nothing more to load"}
                  </button>
                </div>
                <div>
                  {isFetching && !isFetchingNextPage ? "Fetching..." : null}
                </div>
              </>
            )}
          </HomeMain>
        </div>
      </HomeContainerFlex>
    </GlobalStyle>
  );
};

export default Home;
