import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import axiosClient from "@/libs/axiosClient";
import { currentUserState } from "@/state/currentUser";
import { useRecoilState } from "recoil";

export default function login() {
  const router = useRouter();
  const [usernameErrText, setUsernameErrText] = useState<string>("");
  const [passwordErrText, setPasswordErrText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setUsernameErrText("");
    setPasswordErrText("");
    // 入力欄の文字列を取得
    const username: string = event.target.username.value;
    const password: string = event.target.password.value;

    let error: boolean = false;

    if (username === "") {
      error = true;
      setUsernameErrText("名前を入力してください");
    }
    if (password === "") {
      error = true;
      setPasswordErrText("パスワードを入力してください");
    }

    if (error) {
      return;
    }
    setLoading(true);

    // ログインAPIを実行する
    try {
      await axiosClient.get("/sanctum/csrf-cookie");
      const loginRes = await axiosClient.post("/api/login", {
        username,
        password,
      });
      setCurrentUser(loginRes.data.username);
      // ログイン成功したらトップページへ
      router.push("home");
    } catch (error) {
      // ログイン失敗
      console.log(error);
      alert("ユーザ名かパスワードが間違っています");
      setLoading(false);
    }
  };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          id="username"
          label="ユーザ名"
          margin="normal"
          name="username"
          required
          helperText={usernameErrText}
          error={usernameErrText !== ""}
          disabled={loading}
        />
        <TextField
          fullWidth
          id="password"
          label="パスワード"
          margin="normal"
          name="password"
          type="password"
          required
          helperText={passwordErrText}
          error={passwordErrText !== ""}
          disabled={loading}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          type="submit"
          color="primary"
          variant="outlined"
          loading={loading}
        >
          ログイン
        </LoadingButton>
      </Box>
      <Button onClick={() => router.push("/register")}>新規登録</Button>
    </>
  );
}
