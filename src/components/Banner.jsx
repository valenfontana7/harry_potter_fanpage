import React from "react";
import B from "./styles/Banner.module.css";
import banner from "../banner.jpeg";

function Banner() {
  return (
    <div className={B.banner}>
      <img src={banner} alt="banner" />
      <div className={B.banner_info}>
        <h1>Discover an amazing and full of magic world!</h1>
      </div>
    </div>
  );
}

export default Banner;
