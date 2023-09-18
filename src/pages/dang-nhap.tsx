import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { signInApi } from "@/_services";

const inter = Inter({ subsets: ["latin"] });

export default function signIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    // POST METHOD
    await signInApi({
      username,
      password,
    })
      .then(({ data }) => {
        console.log(data);

        // SET LOCALSTORAGE
        const userAuth = {
          email: data.data.email,
          phone: data.data.phone,
          fullName: data.data.fullName,
          gender: data.data.gender,
          avatar: data.data.avatar,
        };
        localStorage.setItem("userAuth", JSON.stringify(userAuth));

        // SET ACCSSTOKEN COOKIE
        document.cookie = `accessToken=${data.data.accessToken}; max-age=86400;`;
      })
      .catch(function (error) {
        console.log(error?.response?.data);
      });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <input
          type="email"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="email"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <br />
        <button onClick={handleLogin}>Dang nhap</button>
      </div>
    </main>
  );
}
