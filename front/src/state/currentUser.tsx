import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// ユーザ名を保管しておく
export const currentUserState = atom({
  key: "currentUser",
  default: [
    {
      id: "",
      name: "",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
