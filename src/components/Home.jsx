import React from "react";
import Banner from "./Banner";
import H from "./styles/Home.module.css";

function Home() {
  return (
    <div className={H.home}>
      <Banner />
    </div>
  );
}

export default Home;
