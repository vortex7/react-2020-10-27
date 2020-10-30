import AboutPage from "./pages/about-page"

const pages = [
  {
    name: "AboutPage",
    url: "/about"
  }
]

const defaultPage = {
  name: "AboutPage",
  url: "/"
}

const components = {
  "AboutPage": AboutPage
}

export { components, defaultPage, pages }
