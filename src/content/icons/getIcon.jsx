import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FileDownload, Inbox, KeyboardArrowUp, Menu } from "@mui/icons-material"
import {
  faArrowUpRightFromSquare,
  faAward,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faHandshakeAngle,
  faPhone,
  faUser
} from "@fortawesome/free-solid-svg-icons"
import { faCopy } from "@fortawesome/free-regular-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons"

const getIcon = (key, props = {}) => {
  switch (key) {
    case "about":
    case "user":
      return <FontAwesomeIcon {...props} icon={faUser} />
    case "experience":
      return <FontAwesomeIcon {...props} icon={faBriefcase} />
    case "certificates":
      return <FontAwesomeIcon {...props} icon={faAward} />
    case "academic":
      return <FontAwesomeIcon {...props} icon={faGraduationCap} />
    case "volunteering":
      return <FontAwesomeIcon {...props} icon={faHandshakeAngle} />
    case "phone":
      return <FontAwesomeIcon {...props} icon={faPhone} />
    case "mail":
      return <FontAwesomeIcon {...props} icon={faEnvelope} />
    case "copy":
      return <FontAwesomeIcon {...props} icon={faCopy} />
    case "linkedIn":
      return <FontAwesomeIcon {...props} icon={faLinkedinIn} />
    case "whatsapp":
      return <FontAwesomeIcon {...props} icon={faWhatsapp} />
    case "github":
      return <FontAwesomeIcon {...props} icon={faGithub} />
    case "external":
      return <FontAwesomeIcon {...props} icon={faArrowUpRightFromSquare} />
    case "download":
      return <FileDownload {...props} />
    case "menu":
      return <Menu {...props} />
    case "arrowUp":
      return <KeyboardArrowUp {...props} />
    default:
      return <Inbox {...props} />
  }
}

export default getIcon
