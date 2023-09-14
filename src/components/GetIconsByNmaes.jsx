import { useContext } from "react";
import { FaHome, FaHourglass, FaInstagram, FaLinkedinIn, FaAirbnb, FaUserAlt, FaFacebookF, FaGoogle, FaVideo, FaEnvelope, FaCamera, FaMusic, FaFilm, FaShoppingCart, FaCar, FaStar, FaHeart, FaGamepad, FaGlobe, FaSun, FaMoon, FaBook, FaBriefcase, FaCoffee, FaCode } from "react-icons/fa";
import { MenuContext } from "../provider/Context";

const GetIconByName = ({ name, fromModal }) => {
  const { iconsDisplayMethod } = useContext(MenuContext);
  const classes = `${fromModal && "w-72 h-72 p-12 rounded-lg border" || (iconsDisplayMethod === "list" && "w-4 h-4" || iconsDisplayMethod === "roomy" && "lg:w-10 lg:h-10 w-8 h-8" || iconsDisplayMethod === "compact" && "lg:w-8 lg:h-8 w-6 h-6")} `
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