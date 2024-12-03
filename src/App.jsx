import ReactDOM from "react-dom"
import { ThemeProvider } from "@mui/material"

import Main from "./modules/Main"
import theme from "./theme"
import "./index.css"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById("root")
)
