import create from "zustand";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

interface sideBar {
  isActive: boolean;
  sideBarAction: () => void;
}
export const useSideBarStore = create<sideBar>((set) => ({
  isActive: false,
  sideBarAction: () => set(({ isActive }) => ({ isActive: !isActive })),
}));

export const useFetchData = () => {
  const fetchVideos = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${
        pageParam * 50
      }&q=programming&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    return res.json();
  };
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery("videoPosts", fetchVideos, {
  //   getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  // });
  return useInfiniteQuery("videoPosts", fetchVideos, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });
};
