import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { signUpApi } from "@/_services";

const inter = Inter({ subsets: ["latin"] });

export default function signUp() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const handleRegister = async () => {
    // POST METHOD
    await signUpApi({
      fullName,
      email,
      phone,
      password,
    })
      .then(({ data }) => {
        console.log(data);
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
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="fullName"
        />
        <br />
        <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
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
        <input
          type="password"
          onChange={(e) => setRePassword(e.target.value)}
          placeholder="re-password"
        />
        <br />
        <br />
        <button onClick={handleRegister}>Dang ky</button>
      </div>
    </main>
  );
}
