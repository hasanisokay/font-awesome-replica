import { createContext, useState } from "react";

export const MenuContext = createContext(null)

const Context = ({children}) => {
    const [sortMethod, setSortMethod] = useState("Featured");
    const [category, setCategory] = useState("");
    const [iconsDisplayMethod, setIconsDisplayMethod] = useState("roomy")
    const [clickedIcon, setClickedIcon] = useState({})
    const [searchedText, setSearchedText] = useState("")
    const menuInfo ={
        sortMethod, setSortMethod, category, setCategory, iconsDisplayMethod, setIconsDisplayMethod, clickedIcon, setClickedIcon, setSearchedText, searchedText
    }
    return (
        <MenuContext.Provider value={menuInfo}>
            {children}
        </MenuContext.Provider>
    );
};

export default Context;