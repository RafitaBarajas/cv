import { useRef } from "react"
import { Box, Divider, useMediaQuery } from "@mui/material"

import LeftBar from "../components/LeftBar"
import Header from "../components/sections/Header"
import AboutMe from "../components/sections/AboutMe"

import config from "../content/config.json"
import Experience from "../components/sections/Experience"
import Certificates from "../components/sections/Certificates"
import Volunteering from "../components/sections/Volunteering"
import Footer from "../components/Footer"

const Main = () => {
  const isMobile = useMediaQuery("(max-width: 870px)")
  const leftBarSections = Object.entries(config.sections).map(
    ([key, section]) => ({ icon: key, label: section.title })
  )

  const aboutMeRef = useRef(null)
  const experienceRef = useRef(null)
  const certificatesRef = useRef(null)
  const backgroundRef = useRef(null)
  const academicRef = useRef(null)

  const dividerProps = {
    variant: "middle",
    sx: {
      margin: "0px 100px",
      overflow: "visible",
      scrollMarginTop: isMobile ? "69px" : "0px"
    }
  }

  return (
    <div>
      <LeftBar
        sections={leftBarSections}
        refs={[
          aboutMeRef,
          experienceRef,
          certificatesRef,
          backgroundRef,
          academicRef
        ]}
      />
      <Box
        sx={{
          marginLeft: isMobile ? "0px" : "25vw",
          marginTop: isMobile ? "69px" : "0px"
        }}
      >
        <Header {...config?.header} />
        <Box
          ref={aboutMeRef}
          sx={{ scrollMarginTop: dividerProps.sx.scrollMarginTop }}
        />
        <AboutMe {...config?.sections?.about} />
        <Divider ref={experienceRef} {...dividerProps} />
        <Experience {...config?.sections?.experience} />
        <Divider ref={certificatesRef} {...dividerProps} />
        <Certificates {...config?.sections?.certificates} />
        <Divider ref={backgroundRef} {...dividerProps} />
        <Experience {...config?.sections?.academic} />
        <Divider ref={academicRef} {...dividerProps} />
        <Volunteering {...config?.sections?.volunteering} />
        <Footer {...config?.footer} />
      </Box>
    </div>
  )
}

export default Main
