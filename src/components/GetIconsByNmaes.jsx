import { useContext } from "react";
import { FaHome, FaHourglass, FaInstagram, FaLinkedinIn, FaAirbnb, FaUserAlt, FaFacebookF, FaGoogle, FaVideo, FaEnvelope, FaCamera, FaMusic, FaFilm, FaShoppingCart, FaCar, FaStar, FaHeart, FaGamepad, FaGlobe, FaSun, FaMoon, FaBook, FaBriefcase, FaCoffee, FaCode } from "react-icons/fa";
import { MenuContext } from "../provider/Context";

const GetIconByName = ({ name, fromModal }) => {
  
  const { iconsDisplayMethod, animation, rotation} = useContext(MenuContext);
  const classes = `${fromModal && ((rotation==="rotate-90" && "rotate-90") || (rotation==="rotate-180" && "rotate-180") || (rotation==="rotate-270" && "rotate-[270deg]") || (rotation==="rotate-360" && "rotate-360"))} ${fromModal && ((animation==="bounce" && "animate-bounce") || (animation==="spin" && "animate-spin") || (animation==="fade" && "animate-pulse") || (animation==="beat" && "animate-ping max-h-36 max-w-48"))} ${fromModal && "w-52 h-52 p-12  " || (iconsDisplayMethod === "list" && "w-4 h-4" || iconsDisplayMethod === "roomy" && "lg:w-10 lg:h-10 w-8 h-8" || iconsDisplayMethod === "compact" && "lg:w-8 lg:h-8 w-6 h-6")} `
  switch (name) {
    case "FaHome":
      return <FaHome className={classes} />;
    case "FaLinkedinIn":
      return <FaLinkedinIn className={classes} />;
    case "FaHourglass":
      return <FaHourglass className={classes} />;
    case "FaUserAlt":
      return <FaUserAlt className={classes} />;
    case "FaVideo":
      return <FaVideo className={classes} />;
    case "FaEnvelope":
      return <FaEnvelope className={classes} />;
    case "FaCamera":
      return <FaCamera className={classes} />;
    case "FaMusic":
      return <FaMusic className={classes} />;
    case "FaFilm":
      return <FaFilm className={classes} />;
    case "FaShoppingCart":
      return <FaShoppingCart className={classes} />;
    case "FaCar":
      return <FaCar className={classes} />;
    case "FaStar":
      return <FaStar className={classes} />;
    case "FaHeart":
      return <FaHeart className={classes} />;
    case "FaGamepad":
      return <FaGamepad className={classes} />;
    case "FaGlobe":
      return <FaGlobe className={classes} />;
    case "FaSun":
      return <FaSun className={classes} />;
    case "FaMoon":
      return <FaMoon className={classes} />;
    case "FaBook":
      return <FaBook className={classes} />;
    case "FaBriefcase":
      return <FaBriefcase className={classes} />;
    case "FaGoogle":
      return <FaGoogle className={classes} />;
    case "FaCoffee":
      return <FaCoffee className={classes} />;
    case "FaFacebookF":
      return <FaFacebookF className={classes} />;
    case "FaCode":
      return <FaCode className={classes} />;
    case "FaAirbnb":
      return <FaAirbnb className={classes} />;
    case "FaInstagram":
      return <FaInstagram className={classes} />;
    default:
      return null;
  }
};
export default GetIconByName;