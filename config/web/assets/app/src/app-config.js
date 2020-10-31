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

const components = {
  "AboutPage": AboutPage,
  "SolutionsPage": SolutionsPage,
}

export { components, pages }
