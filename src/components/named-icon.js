import * as Icons from "react-feather";

function NamedIcon({ iconName }) {
  const Icon = Icons[iconName];
  if (!Icon) {
    alert("bad icon: " + iconName);
  }
  return <Icon color="black" />;
}

export default NamedIcon;
