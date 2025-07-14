import { AiFillGithub } from "react-icons/ai";
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNx,
  SiPostman,
  SiTypescript,
  SiVercel,
  SiNestjs
} from "react-icons/si";

export const typeString = [
  "Web Developer",
  "Software Engineer",
  "Frontend Developer",
  "Learner",
];

export const techStack = [
  {
    id: 1,
    title: "cpp",
    icon: "Nx",
    active: false,
  },
  {
    id: 2,
    title: "js",
    icon: <DiJavascript1 />,
    active: true,
  },
  {
    id: 3,
    title: "next",
    icon: <SiNextdotjs />,
    active: true,
  },
  {
    id: 4,
    title: "react",
    icon: <DiReact />,
    active: true,
  },
  {
    id: 9,
    title: "ts",
    icon: <SiTypescript />,
    active: true,
  },
  {
    id: 5,
    title: "node",
    icon: <DiNodejs />,
    active: true,
  },
  {
    id: 10,
    title: "express",
    icon: <SiExpress />,
    active: true,
  },
  {
    id: 10,
    title: "NestJS",
    icon: <SiNestjs />,
    active: true,
  },
  {
    id: 6,
    title: "git",
    icon: <DiGit />,
    active: true,
  },
  {
    id: 7,
    title: "mongodb",
    icon: <DiMongodb />,
    active: true,
  },
  {
    id: 8,
    title: "mysql",
    icon: <SiMysql />,
    active: true,
  },
];

export const toolsStack = [
  {
    id: 1,
    title: "linux",
    icon: <SiLinux />,
    active: false,
  },
  {
    id: 2,
    title: "vscode",
    // icon: <SiVisualstudiocode />,
    active: true,
  },
  {
    id: 3,
    title: "restapi",
    icon: <SiPostman />,
    active: true,
  },
  {
    id: 5,
    title: "monorepo",
    icon: <SiNx />,
    active: true,
  },
  {
    id: 4,
    title: "vercel",
    icon: <SiVercel />,
    active: true,
  },

  {
    id: 6,
    title: "linux",
    icon: <CgCPlusPlus />,
    active: false,
  },
  {
    id: 7,
    title: "cpp",
    icon: <CgCPlusPlus />,
    active: false,
  },
  {
    id: 8,
    title: "cpp",
    icon: <CgCPlusPlus />,
    active: false,
  },
  {
    id: 9,
    title: "cpp",
    icon: <CgCPlusPlus />,
    active: false,
  },
  {
    id: 10,
    title: "cpp",
    icon: <CgCPlusPlus />,
    active: false,
  },
];
