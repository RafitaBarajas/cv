import { useState } from "react"
import PropTypes from "prop-types"
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  listItemButtonClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  listItemTextClasses,
  styled,
  touchRippleClasses,
  Typography,
  useMediaQuery
} from "@mui/material"
import getIcon from "../content/icons/getIcon"

const DrawerStyled = styled(Drawer, { label: "leftSectionDrawer" })(
  ({ theme }) => ({
    "> div": {
      backgroundColor: theme.palette.second
    },
    "& h1": {
      cursor: "pointer",
      fontSize: "30px",
      fontWeight: "bold",
      color: theme.palette.first,
      margin: "20px 10px 10px 60px"
    },
    [`& .${listItemIconClasses.root}`]: {
      justifyContent: "center",
      color: theme.palette.first,
      "> svg": { height: "17px" }
    },
    [`& .${listItemTextClasses.root}`]: {
      color: theme.palette.third,
      "> span": { fontSize: "17px" }
    },
    [`& .${listItemButtonClasses.root}`]: {
      padding: "8px 16px 8px 60px",
      "&:hover": { backgroundColor: "#00000066" }
    },
    [`& .${touchRippleClasses.root}`]: { color: theme.palette.first },
    "@media all and (max-width: 1430px)": {
      "& h1": { marginLeft: "40px" },
      [`& .${listItemButtonClasses.root}`]: {
        paddingLeft: "40px"
      }
    },
    "@media all and (max-width: 1260px)": {
      "& h1": { marginLeft: "20px" },
      [`& .${listItemButtonClasses.root}`]: {
        paddingLeft: "20px"
      }
    },
    "@media all and (max-width: 1040px)": {
      "& h1": { fontSize: "25px" }
    },
    "@media all and (max-width: 870px)": {
      div: { overflowX: "hidden" },
      "& .titleContainer": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 30px 10px",
        "& button": { "&:hover": { backgroundColor: "#00000066" } },
        "& svg": { color: theme.palette.first }
      },
      "& h1": { margin: "10px 10px" },
      [`& .${listItemButtonClasses.root}`]: {
        width: "100%",
        justifyContent: "center",
        paddingLeft: "16px"
      },
      [`& .${listItemTextClasses.root}`]: {
        maxWidth: "fit-content",
        width: "fit-content",
        paddingRight: "16px",
        textAlign: "center",
        "> span": { width: "fit-content" }
      }
    }
  })
)

const LeftBar = ({ sections = [], refs = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 870px)")

  const handleButtonClick = (idx) => {
    refs[idx]?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMenuOpen(false)
  }

  return (
    <DrawerStyled
      variant="permanent"
      anchor={isMobile ? "top" : "left"}
      sx={{ "> div": { width: isMobile ? "100%" : "25vw" } }}
    >
      <Box className="titleContainer">
        <Typography
          variant="h1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Rafael Barajas
        </Typography>
        {isMobile && (
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            {getIcon("menu")}
          </IconButton>
        )}
      </Box>
      <Collapse in={isMobile ? menuOpen : true}>
        <List>
          {sections.map((section, idx) => {
            const { icon, label } = section
            return (
              <ListItem key={label} disablePadding>
                <ListItemButton onClick={() => handleButtonClick(idx)}>
                  <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            )
          })}
          {isMobile && (
            <ListItem disablePadding>
              <ListItemButton onClick={() => setMenuOpen(false)}>
                <ListItemIcon
                  sx={{
                    "> svg": { height: "35px !important", fontSize: "40px" }
                  }}
                >
                  {getIcon("arrowUp")}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Collapse>
    </DrawerStyled>
  )
}

LeftBar.propTypes = {
  sections: PropTypes.array,
  refs: PropTypes.array
}

export default LeftBar
