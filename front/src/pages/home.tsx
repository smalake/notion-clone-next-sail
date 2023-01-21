import React from "react";
import axiosClient from "@/libs/axiosClient";
import { UserMenu } from "@/components/UserMenu";

const home = () => {
  //   const getUsers = () => {
  //     axiosClient.get("/api/auth-user").then((res) => {
  //       console.log(res.data.username);
  //     });
  //   };
  //   getUsers();

  return (
    <>
      <UserMenu>
        <div>home</div>
      </UserMenu>
    </>
  );
};

export default home;
