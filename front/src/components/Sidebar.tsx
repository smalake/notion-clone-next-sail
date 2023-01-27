import {
  Drawer,
  List,
  ListItemButton,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import axiosClient from "@/libs/axiosClient";
import { currentUserState } from "@/state/currentUser";
import { useRecoilState } from "recoil";
import { memoApi } from "@/pages/api/memoApi";

export const Sidebar = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  // ログアウト
  const handleLogout = async () => {
    await axiosClient.post("/api/logout");
    setCurrentUser("");
    alert("ログアウトしました。");
    router.push("login");
  };

  // メモの新規追加
  const addMemo = async () => {
    try {
      const res = await memoApi.create();
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <List
        sx={{
          width: 250,
          height: "100vh",
        }}
      >
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              fontWeight="700"
              suppressHydrationWarning={true}
            >
              {currentUser.name}
            </Typography>
            <IconButton onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </ListItemButton>
        <Box sx={{ paddingTop: "10px" }}></Box>
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              プライベート
            </Typography>
            <IconButton onClick={() => addMemo()}>
              <AddCircleOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItemButton>
      </List>
    </Drawer>
  );
};
