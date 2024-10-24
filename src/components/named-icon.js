import React from "react";
import * as Icons from "react-feather";

const NamedIcon = React.forwardRef(function NamedIcon(props, ref) {
  const Icon = Icons[props.icon];
  if (!Icon) {
    alert("bad icon: " + props.icon);
  }
  return <Icon {...props} color="white" ref={ref} />;
});

export default NamedIcon;
