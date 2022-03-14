import create from "zustand";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

interface sideBar {
  isActive: boolean;
  sideBarAction: () => void;
}
export const useSideBarStore = create<sideBar>((set) => ({
  isActive: false,
  sideBarAction: () => set(({ isActive }) => ({ isActive: !isActive })),
}));

export const useFetchData = () => {};
