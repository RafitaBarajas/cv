import { useState } from "react"
import PropTypes from "prop-types"

import { Box, styled, Tab, Tabs, tabClasses, Typography } from "@mui/material"
import getIcon from "../../content/icons/getIcon"
import SwipeableViews from "react-swipeable-views"

const Container = styled(Box, { label: "Certificates-Container" })(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "50px 60px 60px",
    "& .titleContainer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme?.palette?.first,
      marginBottom: "30px",
      "& svg": { height: "40px", marginRight: "15px" },
      "& p": { fontSize: "35px", fontWeight: 700 }
    },
    [`& .${tabClasses.root}`]: { color: theme?.palette?.second },
    [`& .${tabClasses.selected}`]: {
      color: `${theme?.palette?.first} !important`
    },
    "& .MuiTabs-indicator": { backgroundColor: theme?.palette?.first },
    "@media all and (max-width: 970px)": { padding: "50px 30px 40px" }
  })
)

const SlideContainer = styled(Box, { label: "Certificates-Slide" })({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  "& .slideItem": {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "250px",
    margin: "20px",
    "& img": { maxWidth: "250px", marginBottom: "10px" },
    "& .itemTitle": { textAlign: "center", fontSize: "19px", fontWeight: 500 },
    "& .itemNote": { textAlign: "center", fontWeight: 500, color: "#777777" }
  },
  "@media all and (max-width: 890px)": {
    "& .slideItem": {
      maxWidth: "200px",
      "& img": { maxWidth: "200px", marginBottom: "10px" }
    }
  },
  "@media all and (max-width: 565px)": {
    "& .slideItem": {
      maxWidth: "70%",
      "& img": { maxWidth: "100%", marginBottom: "10px" }
    }
  }
})

const viewsStyles = {
  border: "5px solid #FFB600",
  borderRadius: "20px",
  paddingTop: "20px"
}

const SlideItem = ({ title, note, image, file, onClick }) => (
  <div className="slideItem" onClick={() => onClick(file)}>
    <img src={`/images/certificates/${image}`} alt={image} />
    <Typography className="itemTitle">{title}</Typography>
    <Typography className="itemNote">{note}</Typography>
  </div>
)
SlideItem.propTypes = {
  title: PropTypes.string,
  note: PropTypes.string,
  image: PropTypes.string,
  file: PropTypes.string,
  onClick: PropTypes.func
}

const Slide = ({ items, onItemClick }) => (
  <SlideContainer>
    {items.map(({ title, note, image, file }) => (
      <SlideItem
        key={image}
        title={title}
        note={note}
        image={image}
        file={file}
        onClick={onItemClick}
      />
    ))}
  </SlideContainer>
)
Slide.propTypes = { items: PropTypes.array, onItemClick: PropTypes.func }

const Certificates = ({ title = "", tabs = [] }) => {
  const [tab, setTab] = useState(0)
  const tabLabels = tabs.map((tab) => tab.label)

  const handleTabChange = (event, newValue) => setTab(newValue)
  const handleItemClick = (file) => window.open(`files/${file}`, "_blank")

  return (
    <Container>
      <Box className="titleContainer">
        {getIcon("certificates")}
        <Typography>{title}</Typography>
      </Box>
      <Box className="tabsContainer">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {tabLabels.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>
      <SwipeableViews
        index={tab}
        enableMouseEvents
        animateHeight
        hysteresis={0.3}
        style={viewsStyles}
        containerStyle={{
          transition: "transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s"
        }}
        action={(node) => setTimeout(() => node.updateHeight(), 100)}
        onChangeIndex={setTab}
      >
        {tabs.map(({ label, items }) => (
          <Slide key={label} items={items} onItemClick={handleItemClick} />
        ))}
      </SwipeableViews>
    </Container>
  )
}

Certificates.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.array
}

export default Certificates
