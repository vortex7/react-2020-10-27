import AboutPage from "./pages/about-page"
import SolutionsPage from "./pages/solutions-page"

const pages = [
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

const defaultPage = {
  name: "AboutPage",
  title: "About",
  url: "/"
}

const components = {
  "AboutPage": AboutPage,
  "SolutionsPage": SolutionsPage,
}

export { components, defaultPage, pages }
