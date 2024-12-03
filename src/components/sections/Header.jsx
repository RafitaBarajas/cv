import PropTypes from "prop-types"
import { Box, Typography, styled } from "@mui/material"

const Container = styled(Box, {
  label: "Header-Container",
  shouldForwardProp: (prop) => prop !== "image"
})(({ image }) => ({
  backgroundImage: `url(src/content/images${image})`,
  backgroundSize: "cover",
  "> div": {
    width: "100%",
    background: "#0006",
    padding: "150px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  "& p": { color: "#fff", textAlign: "center" },
  "& .heading": {
    fontWeight: 700,
    fontSize: "40px",
    margin: "0px 15px"
  },
  "& .subheading": {
    fontSize: "20px"
  }
}))

const Header = ({ image = "", heading = "", subheading = "" }) => {
  return (
    <Container image={image}>
      <Box>
        <Typography className="heading">{heading}</Typography>
        <Typography className="subheading">{subheading}</Typography>
      </Box>
    </Container>
  )
}

Header.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
}

export default Header
