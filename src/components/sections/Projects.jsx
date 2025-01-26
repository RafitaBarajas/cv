import PropTypes from "prop-types"
import { useRef } from "react"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  styled,
  Typography
} from "@mui/material"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import getIcon from "../../content/icons/getIcon"

const Container = styled(Box, { label: "Projects-Container" })(({ theme }) => ({
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
  "& .itemsContainer": {
    display: "flex",
    alignItems: "center",
    "> button": {
      height: "fit-content",
      backgroundColor: theme.palette.first,
      color: theme.palette.third,
      "&:hover": { backgroundColor: `${theme.palette.first}cc` }
    },
    "& .carousel-container": { width: "100%", height: "100%" }
  },
  "@media all and (max-width: 970px)": { padding: "50px 30px 40px" },
  "@media all and (max-width: 465px)": {
    "& .titleContainer": {
      "& p": { textAlign: "center", width: "min-content" }
    }
  }
}))

const ItemCard = styled(Card, { label: "Projects-Item-Card" })(({ theme }) => ({
  borderRadius: "25px",
  margin: "0px 10px",
  height: "100%",
  backgroundColor: theme.palette.first,
  boxShadow: "none",
  "& .MuiCardMedia-root": { height: "180px", width: "100%" },
  "& .MuiCardContent-root": {
    color: theme.palette.third,
    paddingBottom: "8px"
  },
  "& .MuiCardActionArea-root": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  "& .cardLabel": {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  "& .cardText": { fontSize: "16px", fontWeight: 400 },
  "& .cardIcon": {
    height: "30px",
    width: "30px",
    color: theme.palette.third,
    marginLeft: "auto",
    padding: "0px 17px 15px"
  }
}))

const ProjectItem = ({ label, description, image, link }) => {
  return (
    <ItemCard>
      <CardActionArea onClick={() => window.open(link, "_blank")}>
        <Box>
          <CardMedia image={`/images/projects${image}`} title={label} />
          <CardContent>
            <Typography className="cardLabel">{label}</Typography>
            <Typography className="cardText">{description}</Typography>
          </CardContent>
        </Box>
        {getIcon("arrowSquare", {
          sx: { marginTop: "auto" },
          className: "cardIcon"
        })}
      </CardActionArea>
    </ItemCard>
  )
}
ProjectItem.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
}

const responsiveConfig = {
  desktop: { breakpoint: { max: 5000, min: 1260 }, items: 3 },
  tablet: { breakpoint: { max: 1260, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 }
}

const Projects = ({ title = "", icon = "", items = [] }) => {
  const CarouselRef = useRef(null)

  return (
    <Container>
      <Box className="titleContainer">
        {getIcon(icon)}
        <Typography>{title}</Typography>
      </Box>
      <Box className="itemsContainer">
        <IconButton onClick={() => CarouselRef.current?.previous()}>
          {getIcon("arrowUp", { sx: { rotate: "-90deg" } })}
        </IconButton>
        <Carousel
          ref={CarouselRef}
          draggable
          swipeable
          arrows={false}
          infinite
          containerClass="carousel-container"
          responsive={responsiveConfig}
        >
          {items.map(({ label, description, image, link }) => (
            <ProjectItem
              key={label}
              label={label}
              description={description}
              image={image}
              link={link}
            />
          ))}
        </Carousel>
        <IconButton onClick={() => CarouselRef.current?.next()}>
          {getIcon("arrowUp", { sx: { rotate: "90deg" } })}
        </IconButton>
      </Box>
    </Container>
  )
}

Projects.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  items: PropTypes.array
}

export default Projects
