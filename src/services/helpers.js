function FollowLink(link, navigate) {
  if (link.isExternal) {
    window.open(link.url, "_blank").focus();
  } else {
    navigate(link.url);
  }
}

export { FollowLink };
