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
  const fetchVideos = async ({ pageParam = "" }) => {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&pageToken=${pageParam}&q=programming&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    return res.data;
  };
  return useInfiniteQuery("videoPosts", fetchVideos, {
    getNextPageParam: ({ nextPageToken }) => nextPageToken ?? false,
  });
};
