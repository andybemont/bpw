const links = {
  home: {
    url: "/",
    text: "Home",
    icon: "Globe",
    isExternal: false,
  },
  meetTheTeam: {
    url: "/meet-the-team",
    text: "Meet the Team",
    icon: "User",
    isExternal: false,
  },
  pricing: {
    url: "/wedding-photography-pricing",
    text: "Pricing",
    icon: "DollarSign",
    isExternal: false,
  },
  contact: {
    url: "/contact",
    text: "Get In Touch",
    icon: "MessageSquare",
    isExternal: false,
  },
  faq: {
    url: "/wedding-photography-details",
    text: "What to Expect",
    icon: "Clipboard",
    isExternal: false,
  },
  availability: {
    url: "/availability",
    text: "Availability",
    icon: "Calendar",
    isExternal: false,
  },
  morePictures: {
    url: "https://gallery.bemontphoto.com/favorites/",
    text: "More Pictures",
    icon: "Camera",
    isExternal: true,
  },
  galleries: {
    url: "http://gallery.bemontphoto.com/",
    text: "Full Galleries",
    icon: "Archive",
    isExternal: true,
  },
  makeAPayment: {
    url: "https://www.paypal.me/BemontPhoto",
    text: "Make a Payment",
    icon: "Send",
    isExternal: true,
  },
  instagram: {
    url: "https://www.instagram.com/thebemontphoto/",
    text: "Instagram",
    icon: "Instagram",
    isExternal: true,
  },
  facebook: {
    url: "https://www.facebook.com/bemontphoto",
    text: "Facebook",
    icon: "Facebook",
    isExternal: true,
  },
};

const orderedDropdownMenuLinks = [
  links.meetTheTeam,
  links.pricing,
  links.contact,
  links.faq,
  links.availability,
  links.morePictures,
  links.galleries,
  links.makeAPayment,
  links.instagram,
  links.facebook,
];
export { links, orderedDropdownMenuLinks };
