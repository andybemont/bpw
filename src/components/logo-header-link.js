import Grid from "@mui/material/Grid2";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bemont-photo-logo.webp";
import { links } from "../metadata/links";
import { FollowLink } from "../services/helpers";

const LogoHeaderLink = () => {
  var navigate = useNavigate();
  return (
    <Grid display="flex" justifyContent="center" alignItems="center" size="2">
      <img
        src={logo}
        alt={links.home.text}
        height="100px"
        onClick={() => FollowLink(links.home, navigate)}
      />
    </Grid>
  );
};

export default LogoHeaderLink;
