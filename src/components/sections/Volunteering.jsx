import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  styled
} from "@mui/material"
import PropTypes from "prop-types"

import getIcon from "../../content/icons/getIcon"

const Container = styled(Box, { label: "Volunteering-Container" })(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 60px 40px",
    "& .titleContainer": {
      display: "flex",
      alignItems: "center",
      color: theme?.palette?.first,
      marginBottom: "40px",
      "& svg": { height: "40px", marginRight: "15px" },
      "& p": { fontSize: "35px", fontWeight: 700 }
    },
    "& .mainImage": { width: "80%", maxWidth: "500px", marginBottom: "50px" },
    "& .text": {
      width: "85%",
      fontSize: "19px",
      color: theme.palette.second,
      textAlign: "center",
      marginBottom: "20px"
    },
    "@media all and (max-width: 870px)": {
      padding: "50px 30px 40px",
      "& .mainImage": { width: "50%", maxWidth: "100%", marginBottom: "50px" }
    },
    "@media all and (max-width: 320px)": {
      "& .titleContainer > p": { fontSize: "25px" }
    }
  })
)

const Volunteering = ({ title, image, texts, images }) => (
  <Container>
    <Box className="titleContainer">
      {getIcon("volunteering")}
      <Typography>{title}</Typography>
    </Box>
    <img className="mainImage" src={`/images${image}`} alt="Techo Logo" />
    {texts.map((text, index) => (
      <Typography key={index} className="text">
        {text}
      </Typography>
    ))}
    <ImageList variant="quilted" cols={12}>
      {images.map((image, index) => (
        <ImageListItem key={image} cols={index > 1 ? 4 : 6}>
          <img src={`/images${image}`} alt={image.title} />
        </ImageListItem>
      ))}
    </ImageList>
  </Container>
)
Volunteering.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  texts: PropTypes.array,
  images: PropTypes.array
}

export default Volunteering
