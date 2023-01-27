import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// ユーザ名を保管しておく
export const memoListState = atom({
  key: "memoList",
  default: [
    {
      id: "",
      title: "",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
