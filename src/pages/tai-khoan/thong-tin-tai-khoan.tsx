import Image from "next/image";
import { useState, useEffect } from "react";
import { profileApi } from "@/_services";
import { useAppDispatch, useAppSelector } from "@/_redux-store/reduxHook";
import { fetchUserAuth } from "@/_reducers/userAuthSlice";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Profile() {
  const userAuthStatus = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userAuthStatus.status === "idle") {
      dispatch(fetchUserAuth());
    }
  }, [dispatch, userAuthStatus]);
  console.log(userAuthStatus);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <br />
        <br />
      </div>
    </main>
  );
}
