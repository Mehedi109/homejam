import React from "react";
import banner from "../../../images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="">
      {/* <img src={banner} alt="" /> */}
      <div className="banner">
        <div className="banner-image">
          <div></div>
        </div>
        <div className="banner-heading">
          <h1>Cari Cari</h1>
          <p>
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
