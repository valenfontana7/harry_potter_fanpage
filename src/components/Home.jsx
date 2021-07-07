import React from "react";
import Banner from "./Banner";
import H from "./styles/Home.module.css";
import { Header } from "../components";
function Home() {
  return (
    <>
      <Header color="transparent" />
      <div className={H.home}>
        <Banner />
      </div>
    </>
  );
}

export default Home;
