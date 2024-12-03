import { useState } from "react"
import PropTypes from "prop-types"

import { Box, Button, Collapse, Typography, styled } from "@mui/material"
import getIcon from "../../content/icons/getIcon"

const Container = styled(Box, { label: "Experience-Container" })(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "50px 60px 40px",
    "& .titleContainer": {
      display: "flex",
      alignItems: "center",
      color: theme?.palette?.first,
      marginBottom: "30px",
      "& svg": { height: "40px", marginRight: "15px" },
      "& p": { fontSize: "35px", fontWeight: 700 }
    },
    "& .toExpandButton": {
      width: "fit-content",
      textTransform: "none",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "8px 25px 0px",
      color: theme.palette.third,
      backgroundColor: theme.palette.first,
      borderRadius: "30px 30px 0px 0px",
      "&:hover": { backgroundColor: `${theme.palette.first}cc` },
      "& svg": { fontSize: "28px", transition: "transform 0.3s" }
    },
    "& .toExpandDivider": {
      width: "100%",
      height: "10px",
      backgroundColor: theme.palette.first,
      marginBottom: "30px"
    },
    "@media all and (max-width: 1050px)": {
      "& .titleContainer": { justifyContent: "center" }
    },
    "@media all and (max-width: 800px)": { padding: "50px 35px 40px" }
  })
)

const ItemStyled = styled(Box, { label: "Experience-Item" })({
  marginBottom: "60px",
  "& .task": { fontSize: "18px", marginBottom: "10px" },
  "& .language": { fontWeight: "bold" },
  "& .java": { color: "#ed2025" },
  "& .react": { color: "#08d8fd" },
  "& .node": { color: "#7cc327" },
  "& .vue": { color: "#3fb27f" },
  "& .flutter": { color: "#40a0ee" },
  "& .redux": { color: "#5a4488" },
  "& .mui": { color: "#0073e6" },
  "& .firebase": { color: "#ff9100" },
  "@media all and (max-width: 1050px)": { textAlign: "center" }
})

const ItemHeaderContainer = styled(Box, { label: "Experience-ItemHeader" })(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
    justifyContent: "flex-end",
    "& .imageContainer": {
      display: "flex",
      "& img": { width: "90%" }
    },
    "& .heading": {
      fontSize: "29px",
      fontWeight: "bold",
      lineHeight: "1.2",
      color: theme.palette.second
    },
    "& .date": {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: theme.palette.fourth,
      "> p": { margin: "0px" }
    },
    "& .abstract": { fontSize: "18px", "> p": { margin: "0px" } },
    "@media all and (max-width: 1050px)": {
      flexDirection: "column-reverse",
      "> div": { width: "100%" },
      "& .imageContainer": {
        justifyContent: "center",
        "& img": { maxWidth: "400px" }
      },
      "& .headerText": { textAlign: "center", marginBottom: "20px" }
    }
  })
)

const LinkStyled = styled(Box, { label: "Experience-Links" })(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  marginLeft: "20px",
  "& svg": {
    marginRight: "10px",
    fontSize: "19px",
    color: theme.palette.first
  },
  "& p": { fontSize: "15px" },
  "@media all and (max-width: 1050px)": {
    justifyContent: "center",
    marginLeft: "0px"
  }
}))

const highlightLanguages = (text) => {
  const highlighted = text
    .replace("Java", "<span class='language java'>Java</span>")
    .replace("React.js", "<span class='language react'>React.js</span>")
    .replace("Node.js", "<span class='language node'>Node.js</span>")
    .replace("Vue.js", "<span class='language vue'>Vue.js</span>")
    .replace("Flutter", "<span class='language flutter'>Flutter</span>")
    .replace("Unity (C#)", "<span class='language'>Unity (C#)</span>")
    .replace("Redux", "<span class='language redux'>Redux</span>")
    .replace("MUI", "<span class='language mui'>MUI</span>")
    .replace("Firebase", "<span class='language firebase'>Firebase</span>")
  return `<p>${highlighted}</p>`
}

const parseLabel = (first, second) => {
  let label = first
  if (second) label += ` - ${second}`
  return label
}

export const ExperienceItem = ({
  position,
  company,
  startDate,
  endDate,
  abstract = "",
  image,
  border,
  tasks,
  links,
  even
}) => {
  const heading = parseLabel(position, company)
  const date = parseLabel(startDate, endDate)

  return (
    <ItemStyled>
      <ItemHeaderContainer flexDirection={even ? "row-reverse" : "auto"}>
        {image && (
          <Box
            className="imageContainer"
            width="40%"
            justifyContent={even ? "right" : "left"}
            sx={{
              "> img": {
                border: border ? "8px solid #FFB600" : "none",
                borderRadius: border ? "5px" : "0px"
              }
            }}
          >
            <img src={`src/content/images${image}`} alt={image} />
          </Box>
        )}
        <Box
          className="headerText"
          width={image ? "60%" : "80%"}
          textAlign={even ? "left" : "right"}
        >
          <Typography className="heading">{heading}</Typography>
          <Typography
            className="date"
            dangerouslySetInnerHTML={{ __html: highlightLanguages(date) }}
          />
          <Typography
            className="abstract"
            dangerouslySetInnerHTML={{ __html: highlightLanguages(abstract) }}
          />
        </Box>
      </ItemHeaderContainer>
      {tasks && (
        <Box>
          {tasks.map((task, idx) => (
            <div key={idx}>
              <Typography
                key={idx}
                className="task"
                dangerouslySetInnerHTML={{ __html: highlightLanguages(task) }}
              />
              {links && links[idx] && (
                <LinkStyled onClick={() => window.open(links[idx], "_blank")}>
                  {getIcon("external")}
                  <Typography>{links[idx]}</Typography>
                </LinkStyled>
              )}
            </div>
          ))}
        </Box>
      )}
    </ItemStyled>
  )
}

ExperienceItem.propTypes = {
  position: PropTypes.string,
  company: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  abstract: PropTypes.string,
  image: PropTypes.string,
  border: PropTypes.bool,
  tasks: PropTypes.array,
  links: PropTypes.array,
  even: PropTypes.bool
}

const Experience = ({ icon, title = "", items = [], toExpand = {} }) => {
  const [expanded, setExpanded] = useState(false)
  const { label, items: expandItems = [] } = toExpand

  return (
    <Container>
      <Box className="titleContainer">
        {getIcon(icon)}
        <Typography>{title}</Typography>
      </Box>
      {items.map((item, index) => (
        <ExperienceItem key={index} even={index % 2 === 0} {...item} />
      ))}
      {expandItems.length > 0 && (
        <>
          <Button
            className="toExpandButton"
            endIcon={getIcon("arrowUp")}
            sx={{
              "& svg": {
                transform: expanded ? "rotate(0deg)" : "rotate(180deg)"
              }
            }}
            onClick={() => setExpanded(!expanded)}
          >
            {label}
          </Button>
          <Box className="toExpandDivider" />
          <Collapse in={expanded}>
            {expandItems.map((item, index) => (
              <ExperienceItem key={index} even={index % 2 === 0} {...item} />
            ))}
            <Box
              className="toExpandDivider"
              sx={{
                marginBottom: "0px !important",
                marginTop: "-20px !important"
              }}
            />
            <Box display="flex" justifyContent="right">
              <Button
                className="toExpandButton"
                endIcon={getIcon("arrowUp")}
                sx={{
                  borderRadius: "0px 0px 30px 30px !important",
                  padding: "0px 25px 8px !important"
                }}
                onClick={() => setExpanded(false)}
              >
                View Less
              </Button>
            </Box>
          </Collapse>
        </>
      )}
    </Container>
  )
}

Experience.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  toExpand: PropTypes.object
}

export default Experience
