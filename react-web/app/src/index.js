import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"

import { StoreProvider } from "./context/store-context"

ReactDOM.render(
  <StoreProvider><App/></StoreProvider>,
  document.getElementById("root")
)
