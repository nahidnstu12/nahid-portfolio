import {
  AiFillFacebook,
  AiFillGithub,
  AiFillMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

export const socialConnections = [
  {
    id: 1,
    title: "github",
    url: "https://github.com/nahidnstu12",
    icon: <AiFillGithub />,
    active: true,
  },
  {
    id: 2,
    title: "linkedin",
    url: "https://www.linkedin.com/in/nahid-dev/",
    icon: <FaLinkedinIn />,
    active: true,
  },
  {
    id: 3,
    title: "twitter",
    url: "https://twitter.com/Soumyajit4419",
    icon: <AiOutlineTwitter />,
    active: false,
  },
  {
    id: 4,
    title: "mail",
    url: "mailto:nahid.dev19@gmail.com",
    icon: <AiFillMail />,
    active: true,
  },
  {
    id: 5,
    title: "fb",
    url: "https://www.facebook.com/profile.php?id=100025300822373",
    icon: <AiFillFacebook />,
    active: false,
  },
  {
    id: 6,
    title: "gitlab",
    url: "https://twitter.com/Soumyajit4419",
    icon: <AiOutlineTwitter />,
    active: false,
  },
];
