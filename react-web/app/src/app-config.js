import AboutPage from "./pages/about-page"

const pages = [
  {
    name: "AboutPage",
    title: "About",
    url: "/about"
  }
]

const defaultPage = {
  name: "AboutPage",
  title: "About",
  url: "/"
}

const components = {
  "AboutPage": AboutPage
}

export { components, defaultPage, pages }
