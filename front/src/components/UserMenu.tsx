import { ReactNode, useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import axiosClient from "@/libs/axiosClient";
import { currentUserState } from "@/state/currentUser";
import { useRecoilState } from "recoil";

interface LayoutProps {
  children: ReactNode;
}

export const UserMenu = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const authCheck = async () => {
    try {
      await axiosClient.get("/api/auth-user"); //認証が通るかチェック
    } catch {
      // 認証ができていなければログインページへリダイレクト
      router.push("login");
    }
  };
  authCheck();

  const handleLogout = async () => {
    await axiosClient.post("/api/logout");
    setCurrentUser("");
    alert("ログアウトしました。");
    router.push("login");
  };

  return (
    <>
      <div>
        <span suppressHydrationWarning={true}>{currentUser.name}</span>
        <Button onClick={handleLogout}>ログアウト</Button>
      </div>
      {children}
    </>
  );
};
