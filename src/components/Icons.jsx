import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../provider/Context";
import { iconsData } from "./IconsData";
import GetIconByName from "./getIconsByNmaes";
import { FaCheckSquare, FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import Modal from "./Modal";

const Icons = () => {
    const [showSolid, setShowSolidIcon] = useState(true);
    const [showRegular, setShowRegularIcon] = useState(true);
    const [showLight, setShowLightIcon] = useState(true);
    const [showThin, setShowThinIcon] = useState(true);
    const [showDuotone, setShowDuotoneIcon] = useState(true);
    const { category, setCategory, sortMethod, filteredIcon, setFilteredIcon, iconsDisplayMethod, searchedText, setClickedIcon, showFilter } = useContext(MenuContext);
    const handleIconClik = (icon) => {
        setClickedIcon(icon)
        document.getElementById('my_modal_2').showModal()
    }
    useEffect(() => {
        const categoryWords = category.split(" ").filter(Boolean);
        const filteredIcons = iconsData.filter((icon) => {
            const iconCategoryWords = icon.category.split(" ").filter(Boolean);
            return categoryWords.every((word) => iconCategoryWords.includes(word));
        });

        if (sortMethod === "Alphabetical") {
            const sortedIcons = filteredIcons.sort((a, b) => {
                const nameA = a.name.replace("Fa", "").toLowerCase();
                const nameB = b.name.replace("Fa", "").toLowerCase();
                return nameA.localeCompare(nameB);
            });
            return setFilteredIcon(sortedIcons)
        }
        setFilteredIcon(filteredIcons.filter((icon) => icon.name.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase() || "")));
    }, [category, sortMethod, searchedText])

    return (
        <div className="bg-[#f0f1f3] min-h-[100vh] py-10">
            <div className="lg:flex lg:gap-8 lg:w-[90%] w-[95%] mx-auto">
                <div className={`${showFilter ? "block":"hidden"} lg:block `}>
                    <h3 className="font-bold text-xs text-[#7c6f8a] lg:pt-8 pb-2">STYLE</h3>
   
                    <div onMouseEnter={() => category.includes("solid") ? "" : setShowSolidIcon(false)} onMouseLeave={() => setShowSolidIcon(true)} onClick={() => setCategory(category.includes("solid") ? category.replace("solid", "") : category + " solid")} className={`cursor-pointer rounded-lg flex items-center justify-between p-2 lg:w-60 w-full h-8 mb-1 ${category.includes("solid") ? 'text-white bg-[#146ebe]' : 'hover:outline-1 hover:outline hover:outline-gray-300'}`}>
                        <div className="flex justify-start items-center gap-2">
                            {category.includes("solid") ? <FaCheckSquare className="w-3 h-3 rounded" /> : (showSolid ? <FaCircle className="w-3 h-3 text-gray-600" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>)} <span className="text-sm">Solid</span>
                        </div>
                        <p className={` ${category.includes("solid") ? "text-white" : "text-gray-600"} `}>{iconsData.filter(i => i?.category?.includes("solid")).length}</p>
                    </div>
                    <div onMouseEnter={() => category.includes("regular") ? "" : setShowRegularIcon(false)} onMouseLeave={() => setShowRegularIcon(true)} onClick={() => setCategory(category.includes("regular") ? category.replace("regular", "") : category + " regular")} className={`cursor-pointer rounded-lg flex items-center justify-between p-2 lg:w-60 w-full h-8 mb-1 ${category.includes("regular") ? 'text-white bg-[#146ebe]' : 'hover:outline-1 hover:outline hover:outline-gray-300 '}`}>
                        <div className="flex items-center gap-2">
                            {category.includes("regular") ? <FaCheckSquare className="w-3 h-3 rounded" /> : (showRegular ? <FaCircleHalfStroke className="w-3 h-3 text-gray-600" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>)} <span className="text-sm">Regular</span>
                        </div>
                        <p className={` ${category.includes("regular") ? "text-white" : "text-gray-600"} `}>{iconsData.filter(i => i?.category?.includes("regular")).length}</p>
                    </div>
                    <div onMouseEnter={() => category.includes("light") ? "" : setShowLightIcon(false)} onMouseLeave={() => setShowLightIcon(true)} onClick={() => setCategory(category.includes("light") ? category.replace("light", "") : category + " light")} className={`cursor-pointer rounded-lg flex items-center justify-between p-2 lg:w-60 w-full h-8 mb-1 ${category.includes("light") ? 'text-white bg-[#146ebe]' : 'hover:outline-1 hover:outline hover:outline-gray-300 '}`}>
                        <div className="flex items-center gap-2">
                            {category.includes("light") ? <FaCheckSquare className="w-3 h-3 rounded" /> : (showLight ? <FaCircle className="w-3 h-3 text-white border border-gray-400 rounded-full " /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>)} <span className="text-sm">Light</span>

                        </div>
                        <p className={`${category.includes("light") ? "text-white" : "text-gray-600"} `}>{iconsData.filter(i => i?.category?.includes("light")).length}</p>
                    </div>
                    <div onMouseEnter={() => category.includes("thin") ? "" : setShowThinIcon(false)} onMouseLeave={() => setShowThinIcon(true)} onClick={() => setCategory(category.includes("thin") ? category.replace("thin", "") : category + " thin")} className={`cursor-pointer rounded-lg flex items-center justify-between p-2 lg:w-60 w-full h-8 mb-1 ${category.includes("thin") ? 'text-white bg-[#146ebe]' : 'hover:outline-1 hover:outline hover:outline-gray-300 '}`}>
                        <div className="flex items-center gap-2">
                            {category.includes("thin") ? <FaCheckSquare className="w-3 h-3 rounded" /> : (showThin ? <FaCircle className="w-3 h-3 text-white border border-gray-400 rounded-full" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>)} <span className="text-sm">Thin</span>
                        </div>
                        <p className={`${category.includes("thin") ? "text-white" : "text-gray-600"} `}>{iconsData.filter(i => i?.category?.includes("thin")).length}</p>
                    </div>
                    <div onMouseEnter={() => category.includes("duotone") ? "" : setShowDuotoneIcon(false)} onMouseLeave={() => setShowDuotoneIcon(true)} onClick={() => setCategory(category.includes("duotone") ? category.replace("duotone", "") : category + " duotone")} className={`cursor-pointer rounded-lg flex items-center justify-between p-2 lg:w-60 w-full h-8 ${category.includes("duotone") ? 'text-white bg-[#146ebe]' : 'hover:outline-1 hover:outline hover:outline-gray-300 '}`}>
                        <div className="flex items-center gap-2">
                            {category.includes("duotone") ? <FaCheckSquare className="w-3 h-3 rounded" /> : (showDuotone ? <FaCircleHalfStroke className="w-3 h-3 text-gray-600 bg-slate-400 rounded-full" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>)} <span className="text-sm">Duotone</span>
                        </div>
                        <p className={`${category.includes("duotone") ? "text-white" : "text-gray-600"} `}>{iconsData.filter(i => i?.category?.includes("duotone")).length}</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-10 mb-6">
                        {
                            (/[a-zA-Z]/g.test(category) || /[a-zA-Z]/g.test(category)) && <div className="flex">
                                <div className="flex">{category.split(" ").map((icon, index) => /[a-zA-Z]/g.test(icon) && <div key={index} className="px-4 py-2 bg-white text-xs font-bold mx-2 rounded-full flex gap-4 items-center"> <span className="hover:text-blue-600">{icon.toUpperCase()}</span> <span onClick={() => setCategory(category.replace(icon, ""))} className="text-[10px] hover:text-red-600 cursor-pointer font-light ">x</span></div>)} </div>
                                <button onClick={() => {setCategory(""); setCategory("")}} className="hover:text-blue-600 hover:border-blue-600 py-1 px-2 font-bold rounded-full text-xs border border-gray-500">RESET</button>
                            </div>
                        }
                    </div>
                    <div className={``} >
                        <h3 className="font-bold lg:text-2xl mb-8 text-lg lg:px-0 px-10 md:px-12">{filteredIcon.length} Icons</h3>
                        <div className="flex lg:justify-start justify-center flex-wrap gap-4">
                            {filteredIcon.map((iconInfo, index) => <div onClick={() => handleIconClik(iconInfo)} className={`relative ${iconsDisplayMethod === "list" && "flex-row p-2 w-48 h-12"} ${iconsDisplayMethod === "compact" && "p-8 w-32 h-32 flex-col"} ${iconsDisplayMethod === "roomy" && "lg:w-40 lg:h-40 w-36 h-36 p-10 flex-col"} cursor-pointer duration-300  flex items-center gap-2 rounded bg-white hover:bg-[#ffd43b]`} key={index}>
                                <GetIconByName name={iconInfo.name} />
                                {iconInfo.type === "pro" && <span className={`px-[12px] py-[2px] ${iconsDisplayMethod === "list" ? "right-4" : ""} -top-2 lg:text-[10px] text-[10px] absolute font-semibold lg:font-bold text-center rounded-lg bg-[#ffd43b] `}>PRO</span>}
                                <span className="text-sm">{iconInfo.name.replace("Fa", "")}</span>
                            </div>)}
                        </div>

                    </div>
                    <Modal></Modal>
                </div>
            </div>
        </div>

    );
};

export default Icons;
