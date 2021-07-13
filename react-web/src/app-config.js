import React from "react"
import InfoIcon from "@material-ui/icons/Info"
import SettingsIcon from "@material-ui/icons/Settings"
import CallSplitIcon from "@material-ui/icons/CallSplit"

import AboutPage from "./pages/about-page"

const components = {
  "Home": AboutPage,
}

const pagesByName = {
  "Home": {
    name: "Home",
    title: "Home",
    icon: <InfoIcon />,
    url: "/"
  },
  "EAWiki": {
    name: "EAWiki",
    title: "EA-Wiki",
    icon: <InfoIcon />,
    url: "/EA-Wiki"
  },
  "Domains": {
    name: "Domains",
    title: "Domains",
    icon: <InfoIcon />,
    url: "/Domains"
  },
  "Systems": {
    name: "Systems",
    title: "Systems",
    icon: <InfoIcon />,
    url: "/Systems"
  },
  "Graphs": {
    name: "Graphs",
    title: "Graphs",
    icon: <InfoIcon />,
    url: "/Graphs"
  },
  "Visualizations": {
    name: "Visualizations",
    title: "Visualizations",
    icon: <InfoIcon />,
    url: "/Visualizations"
  }
  
}

const pages = [
  pagesByName["Home"],
  pagesByName["EAWiki"],
  pagesByName["Domains"],
  pagesByName["Systems"],
  pagesByName["Graphs"],
  pagesByName["Visualizations"],
]

const categories = [
  {
    name: "About",
    title: "About",
    pages: [
      pagesByName["AboutPage"],
    ],
  },
]

export { categories, components, pages }
