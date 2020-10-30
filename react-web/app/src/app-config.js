import About from "./pages/about"

const pages = [
  {
    name: "About",
    url: "/about"
  }
]

const defaultPage = {
  name: "About",
  url: "/"
}

const components = {
  "About": About
}

export { components, defaultPage, pages }
