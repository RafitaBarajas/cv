import { useState } from "react"
import PropTypes from "prop-types"

import Flag from "react-world-flags"
import {
  Box,
  Tooltip,
  tooltipClasses,
  Typography,
  styled,
  Button,
  buttonClasses
} from "@mui/material"
import getIcon from "../../content/icons/getIcon"

const Container = styled(Box, {
  label: "AboutMe-Container"
})(({ theme }) => ({
  display: "flex",
  padding: "50px 0px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "> div": { width: "50%", padding: "0px 50px" },
  "& .imageContainer": {
    display: "flex",
    justifyContent: "center",
    maxWidth: "400px",
    "& img": {
      maxWidth: "400px",
      border: `8px solid ${theme?.palette?.first}`
    }
  },
  "& .titleContainer": {
    display: "flex",
    alignItems: "center",
    color: theme?.palette?.first,
    marginBottom: "10px",
    "& svg": { height: "40px", marginRight: "15px" },
    "& p": { fontSize: "35px", fontWeight: 700 }
  },
  "& .message": { fontSize: "16px", marginBottom: "50px" },
  "& .emailContainer, .phoneContainer": {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    "& svg": { height: "22px", marginRight: "15px" },
    "& p": { marginRight: "15px" }
  },
  "@media all and (max-width: 1385px)": {
    "> div": { padding: "0px 30px" },
    "& .imageContainer": {
      maxWidth: "300px",
      "& img": { maxWidth: "300px" }
    }
  },
  "@media all and (max-width: 1140px)": {
    justifyContent: "space-evenly",
    "> div": { padding: "0px 15px" },
    "& .imageContainer": {
      maxWidth: "200px",
      "& img": { maxWidth: "200px" }
    },
    "& .message": { fontSize: "14px", marginBottom: "20px" },
    "& .emailContainer, .phoneContainer": {
      marginBottom: "10px",
      "& svg": { height: "20px", marginRight: "15px" },
      "& p": { fontSize: "14px", marginRight: "15px" }
    }
  },
  "@media all and (max-width: 670px)": {
    padding: "10px 0px",
    flexWrap: "wrap",
    "> div": { width: "100%", padding: "20px 25px" },
    "& .infoContainer": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    "& .titleContainer": { justifyContent: "center", marginBottom: "20px" },
    "& .message": {
      fontSize: "16px",
      marginBottom: "35px",
      textAlign: "center"
    },
    "& .emailContainer, .phoneContainer": {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      "& svg": { height: "22px", marginRight: "15px" },
      "& p": { fontSize: "16px", marginRight: "15px" }
    }
  },
  "@media all and (max-width: 400px)": {
    "& .message": {
      marginBottom: "20px"
    },
    "& .emailContainer, .phoneContainer": {
      display: "flex",
      flexWrap: "wrap",
      "& svg": { height: "20px", margin: "7px 0px" },
      "& p": { fontSize: "14px", margin: "0px 10px" }
    }
  }
}))

const EmailTooltip = styled(
  ({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
  { shouldForwardProp: (prop) => prop !== "emailCopied" }
)(({ theme, emailCopied }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: emailCopied ? theme.palette.first : theme.palette.fourth,
    color: "#fff"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: emailCopied ? theme.palette.first : theme.palette.fourth
  }
}))

const PhoneTooltip = styled(
  ({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
  { shouldForwardProp: (prop) => prop !== "phoneCopied" }
)(({ theme, phoneCopied }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: phoneCopied ? theme.palette.first : theme.palette.fourth,
    color: "#fff"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: phoneCopied ? theme.palette.first : theme.palette.fourth
  }
}))

const SocialsContainer = styled(Box)({
  display: "flex",
  margin: "40px 0px",
  "> button": {
    color: "#fff",
    minWidth: "auto",
    width: "80px",
    height: "80px",
    borderRadius: "8px",
    margin: "0px 20px 0px 0px",
    "> span": {
      margin: 0
    }
  },
  [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
    fontSize: "60px"
  },
  "@media all and (max-width: 1140px)": {
    margin: "25px 0px",
    "> button": {
      width: "60px",
      height: "60px",
      margin: "0px 15px 0px 0px"
    },
    [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
      fontSize: "45px"
    }
  },
  "@media all and (max-width: 670px)": {
    justifyContent: "space-evenly",
    width: "100%",
    margin: "30px 0px",
    "> button": {
      width: "80px",
      height: "80px",
      margin: "0px"
    },
    [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
      fontSize: "60px"
    }
  }
})

const DownloadContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "fit-content",
  minWidth: "393px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.first,
  borderRadius: "30px",
  color: theme.palette.third,
  padding: "15px",
  "> div": { display: "flex", alignItems: "center" },
  "& svg": { fontSize: "30px", marginRight: "6px" },
  "& p": { fontSize: "18px", fontWeight: 600, marginRight: "20px" },
  "& button": {
    color: theme.palette.first,
    backgroundColor: theme.palette.third,
    fontSize: "16px",
    fontWeight: "bold",
    padding: "6px 10px",
    borderRadius: "8px",
    marginRight: "10px",
    "&:hover": { backgroundColor: `${theme.palette.third}cc` },
    "& img": { width: "30px", marginLeft: "8px" }
  },
  "@media all and (max-width: 1140px)": {
    minWidth: "310px",
    padding: "8px",
    "& svg": { fontSize: "25px", marginRight: "4px" },
    "& p": { fontSize: "15px", marginRight: "13px" },
    "& button": {
      fontSize: "13px",
      padding: "5px 8px",
      marginRight: "8px",
      "& img": { width: "25px", marginLeft: "6px" }
    }
  },
  "@media all and (max-width: 670px)": {
    flexDirection: "column",
    padding: "8px 20px",
    minWidth: "0px",
    "> div": { margin: "7px 0px" },
    "& svg": { fontSize: "35px", marginRight: "0px" },
    "& p": { fontSize: "20px", marginRight: "0px" },
    "& button": {
      fontSize: "18px",
      padding: "5px 10px",
      margin: "0px 8px 5px",
      "& img": { width: "30px", marginLeft: "8px" }
    }
  }
}))

const AboutMe = ({
  image = "",
  title = "",
  message = "",
  email = "",
  phone = "",
  socials = [],
  download = {}
}) => {
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const handleCopyClick = ({ copy, setState }) => {
    navigator.clipboard.writeText(copy)
    setState(true)
    setTimeout(() => {
      setState(false)
    }, 5000)
  }

  return (
    <Container>
      <Box className="imageContainer">
        <img src={`src/content/images${image}`} alt="Rafael Barajas" />
      </Box>
      <Box className="infoContainer">
        <Box className="titleContainer">
          {getIcon("user")}
          <Typography>{title}</Typography>
        </Box>
        <Typography className="message">{message}</Typography>
        <Box className="emailContainer">
          {getIcon("mail")}
          <Typography>{email}</Typography>
          <EmailTooltip
            title={emailCopied ? "Copied!" : "Copy"}
            placement="top"
            arrow
            emailCopied={emailCopied}
          >
            {getIcon("copy", {
              cursor: "pointer",
              onClick: () =>
                handleCopyClick({ copy: email, setState: setEmailCopied })
            })}
          </EmailTooltip>
        </Box>
        <Box className="phoneContainer">
          {getIcon("phone")}
          <Typography>{phone}</Typography>
          <PhoneTooltip
            title={phoneCopied ? "Copied!" : "Copy"}
            placement="top"
            arrow
            phoneCopied={phoneCopied}
          >
            {getIcon("copy", {
              cursor: "pointer",
              onClick: () =>
                handleCopyClick({ copy: phone, setState: setPhoneCopied })
            })}
          </PhoneTooltip>
        </Box>
        <SocialsContainer>
          {socials.map(({ icon, color, link }) => (
            <Button
              key={icon}
              startIcon={getIcon(icon)}
              onClick={() => window.open(link, "_blank")}
              sx={{
                backgroundColor: color,
                "&:hover": {
                  backgroundColor: `${color}cc`
                }
              }}
            />
          ))}
        </SocialsContainer>
        <DownloadContainer>
          <div>
            {getIcon("download")}
            <Typography>{download.label}</Typography>
          </div>
          <div>
            {download.buttons.map(({ flag, label, file }) => (
              <Button
                key={file}
                variant="contained"
                onClick={() => window.open(`files/${file}`, "_blank")}
              >
                {label}
                <Flag code={flag} />
              </Button>
            ))}
          </div>
        </DownloadContainer>
      </Box>
    </Container>
  )
}

AboutMe.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  socials: PropTypes.array,
  download: PropTypes.object
}

export default AboutMe
