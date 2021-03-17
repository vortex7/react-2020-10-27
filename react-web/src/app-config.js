import React from "react"
import InfoIcon from "@material-ui/icons/Info"
import SettingsIcon from "@material-ui/icons/Settings"
import CallSplitIcon from "@material-ui/icons/CallSplit"

import AboutPage from "./pages/about-page"
import FlowPage from "./pages/flow-page"
import PreferencesPage from "./pages/preferences-page"

const components = {
  "AboutPage": AboutPage,
  "PreferencesPage": PreferencesPage,
  "FlowPage": FlowPage,
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
  },
  "FlowPage": {
    name: "FlowPage",
    title: "Flow",
    icon: <CallSplitIcon />,
    url: "/flow"
  },
  "PreferencesPage": {
    name: "PreferencesPage",
    title: "Preferences",
    icon: <SettingsIcon />,
    url: "/preferences"
  },
}

const pages = [
  pagesByName["HomePage"],
  pagesByName["AboutPage"],
  pagesByName["FlowPage"],
  pagesByName["PreferencesPage"],
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
    name: "Components",
    title: "Components",
    pages: [
      pagesByName["FlowPage"],
      pagesByName["PreferencesPage"],
    ],
  },
]

export { categories, components, pages }
