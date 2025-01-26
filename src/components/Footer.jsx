import { Box, styled, Typography } from "@mui/material"
import PropTypes from "prop-types"

const FooterStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.first,
  color: theme.palette.third,
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
  "& p": { fontSize: "17px" }
}))

const Footer = ({ text }) => {
  const currentYear = new Date().getFullYear()
  const parsedText = text.replace("{%year%}", currentYear)

  return (
    <FooterStyled>
      <Typography>{parsedText}</Typography>
    </FooterStyled>
  )
}
Footer.propTypes = { text: PropTypes.string }

export default Footer
