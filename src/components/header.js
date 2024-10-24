import Grid from "@mui/material/Grid2";
import React from "react";
import "../App.css";
import { allLinks } from "../metadata/links";
import AdditionalLinksMenu from "./additional-links-menu";
import IconHeaderLink from "./icon-header-link";

const Header = () => {
  var linksToShowIcon = allLinks.filter((link) => link.placement === "top");
  var linksToPutInDropdown = allLinks.filter(
    (link) => link.placement === "buried"
  );

  return (
    <header className="App-header">
      <Grid container spacing={3}>
        {linksToShowIcon.map((link) => (
          <IconHeaderLink key={link.icon} link={link} />
        ))}
        <AdditionalLinksMenu links={linksToPutInDropdown} />
      </Grid>
    </header>
  );
};

export default Header;
