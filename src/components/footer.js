import Grid from "@mui/material/Grid2";
import React from "react";
import "../App.css";
import { allLinks } from "../metadata/links";
import IconHeaderLink from "./icon-header-link";
import Slideshow from "./slideshow";

const Footer = () => {
  var linksToShowIcon = allLinks.filter((link) => link.placement === "footer");

  return (
    <>
      <footer className="App-footer">
        <Slideshow />
        <Grid container spacing={3}>
          {linksToShowIcon.map((link) => (
            <IconHeaderLink key={link.icon} link={link} />
          ))}
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            size="6"
          >
            <a href="/contact" className="App-footer-link">
              andy@bemontphoto.com
            </a>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
