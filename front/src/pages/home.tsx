import React from "react";
import axiosClient from "@/libs/axiosClient";

const home = () => {
  const getUsers = () => {
    axiosClient.get("/api/users").then((res) => {
      console.log(res.data);
    });
  };
  getUsers();

  return <div>home</div>;
};

export default home;
