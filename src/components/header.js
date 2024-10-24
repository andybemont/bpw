import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import "../App.css";
import { orderedDropdownMenuLinks } from "../metadata/links";
import AdditionalLinksMenu from "./additional-links-menu";
import IconHeaderLink from "./icon-header-link";
import LogoHeaderLink from "./logo-header-link";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var usablePixels = width - 150;
  var slots = Math.floor(usablePixels / 50.0);
  var maxIcons = slots - 1;
  if (maxIcons + 1 === orderedDropdownMenuLinks.length) {
    // Don't have a dropdown with just one item in it
    maxIcons++;
  }
  var linksToShowIcon = orderedDropdownMenuLinks.slice(0, maxIcons);
  var linksToPutInDropdown = orderedDropdownMenuLinks.slice(maxIcons);

  return (
    <header className="App-header">
      <Grid container spacing={3}>
        <LogoHeaderLink />
        {linksToShowIcon.map((link) => (
          <IconHeaderLink link={link} />
        ))}
        <AdditionalLinksMenu links={linksToPutInDropdown} />
      </Grid>
    </header>
  );
};

export default Header;
