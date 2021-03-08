import React from "react"
import InfoIcon from "@material-ui/icons/Info"

import AboutPage from "./pages/about-page"
import FlowPage from "./pages/flow-page"

const components = {
  "AboutPage": AboutPage,
  "FlowPage": FlowPage,
}

const pagesByName = {
  "HomePage": {
    name: "AboutPage",
    title: "About",
    icon: <InfoIcon />,
    url: "/about"
  },
  "AboutPage": {
    name: "AboutPage",
    title: "About",
    icon: <InfoIcon />,
    url: "/about"
  },
  "FlowPage": {
    name: "FlowPage",
    title: "Flow",
    icon: <InfoIcon />,
    url: "/flow"
  },
}

const pages = [
  pagesByName["HomePage"],
  pagesByName["AboutPage"],
  pagesByName["FlowPage"],
]

const categories = [
  {
    name: "About",
    title: "About",
    pages: [
      pagesByName["AboutPage"],
    ],
  },
  {
    name: "Flow",
    title: "Flow",
    pages: [
      pagesByName["FlowPage"],
    ],
  },
]

export { categories, components, pages }
