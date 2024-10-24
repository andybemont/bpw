import Grid from "@mui/material/Grid2";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { FollowLink } from "../services/helpers";
import NamedIcon from "./named-icon";

const IconHeaderLink = (props) => {
  var navigate = useNavigate();
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      size="grow"
    >
      <div
        onClick={() => FollowLink(props.link, navigate)}
        className="icon-header-link"
      >
        <Tooltip title={props.link.text}>
          <NamedIcon icon={props.link.icon} />
        </Tooltip>
      </div>
    </Grid>
  );
};

export default IconHeaderLink;
