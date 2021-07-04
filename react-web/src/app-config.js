import React from "react"
import InfoIcon from "@material-ui/icons/Info"
import SettingsIcon from "@material-ui/icons/Settings"
import CallSplitIcon from "@material-ui/icons/CallSplit"

import AboutPage from "./pages/about-page"

const components = {
  "AboutPage": AboutPage,
}

const pagesByName = {
  "HomePage": {
    name: "AboutPage",
    title: "About",
    icon: <InfoIcon />,
    url: "/"
  },
  "AboutPage": {
    name: "AboutPage",
    title: "About",
    icon: <InfoIcon />,
    url: "/about"
  }
}

const pages = [
  pagesByName["HomePage"],
  pagesByName["AboutPage"],
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
