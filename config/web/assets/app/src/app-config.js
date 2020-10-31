import React from "react"
import ArtTrackIcon from "@material-ui/icons/ArtTrack"
import InfoIcon from "@material-ui/icons/Info"
import PeopleIcon from "@material-ui/icons/People"
import SearchIcon from "@material-ui/icons/Search"

import AboutPage from "./pages/about-page"
import SolutionsPage from "./pages/solutions-page"

// The first entry is the default route "/"
const pages = [
  {
    name: "AboutPage",
    title: "About",
    url: "/"
  },
  {
    name: "AboutPage",
    title: "About",
    url: "/about"
  },
  {
    name: "SolutionsPage",
    title: "Solutions",
    url: "/solutions"
  }
]

const categories = [
  {
    id: "Products",
    children: [
      { id: "Solutions", icon: <ArtTrackIcon /> },
    ],
  },
  {
    id: "About",
    children: [
      { id: "About", icon: <InfoIcon /> },
    ],
  },
]

const components = {
  "AboutPage": AboutPage,
  "SolutionsPage": SolutionsPage,
}

export { categories, components, pages }
