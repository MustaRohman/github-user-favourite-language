import Head from "next/head";
import { HomeContent } from "../components/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub User Favourite Progamming Language</title>
        <meta
          name="description"
          content="Created by Musta Rohman, developed using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />;
    </>
  );
}
