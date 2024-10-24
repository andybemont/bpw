import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FollowLink } from "../services/helpers";
import NamedIcon from "./named-icon";

const AdditionalLinksMenu = ({ links }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    links &&
    links.length > 0 && (
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size="grow"
      >
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Tooltip title="More...">
            <NamedIcon icon="Menu" />
          </Tooltip>
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {links.map((link) => {
            return (
              <MenuItem
                key={link.icon}
                onClick={() => FollowLink(link, navigate)}
              >
                {link.text}
              </MenuItem>
            );
          })}
        </Menu>
      </Grid>
    )
  );
};

export default AdditionalLinksMenu;
