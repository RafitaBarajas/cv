import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@mui/material"

import Main from "./modules/Main"
import theme from "./theme"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
)
