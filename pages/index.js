import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Chat from "../components/Chat";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    // document.cookie = "username=John Doe";
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <div>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="  mx-auto">
        <Chat />
      </div>
    </div>
  );
}