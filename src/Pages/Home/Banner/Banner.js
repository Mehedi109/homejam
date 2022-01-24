import React from "react";
import banner from "../../../images/banner.png";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../../images/logo.png";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="" style={{ marginBottom: "-200px" }}>
      {/* <nav>
        <label className="logo">
          {" "}
          <img src={logo} alt="" />{" "}
        </label>
      </nav> */}
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
          <Box sx={{ borderRadius: "50%", color: "white" }}>Label</Box>
        </div>
      </div>
    </div>
  );
};

export default Banner;
