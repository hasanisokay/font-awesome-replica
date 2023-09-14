import { createContext, useState } from "react";
import { iconsData } from "../components/IconsData";
export const MenuContext = createContext(null)

const Context = ({ children }) => {
    const [sortMethod, setSortMethod] = useState("Featured");
    const [category, setCategory] = useState("");
    const [iconsDisplayMethod, setIconsDisplayMethod] = useState("roomy")
    const [clickedIcon, setClickedIcon] = useState({})
    const [searchedText, setSearchedText] = useState("")
    const [filteredIcon, setFilteredIcon] = useState(iconsData);
    const [selectedStyle, setSelectedStyle] = useState("")
    const [showFilter, setShowFilter] = useState(false);
    const menuInfo = {
        sortMethod, setSortMethod, filteredIcon, setFilteredIcon, category, setCategory, iconsDisplayMethod, setIconsDisplayMethod, clickedIcon, setClickedIcon, setSearchedText, searchedText, selectedStyle, setSelectedStyle, showFilter, setShowFilter,
    }
    return (
        <MenuContext.Provider value={menuInfo}>
            {children}
        </MenuContext.Provider>
    );
};

export default Context;