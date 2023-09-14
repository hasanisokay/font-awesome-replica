import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../provider/Context";
import { iconsData } from "./IconsData";
import GetIconByName from "./getIconsByNmaes";
import { FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import Modal from "./Modal";

const Icons = () => {
    const [showSolid, setShowSolidIcon] = useState(true);
    const [showRegular, setShowRegularIcon] = useState(true);
    const [showLight, setShowLightIcon] = useState(true);
    const [showThin, setShowThinIcon] = useState(true);
    const [showDuotone, setShowDuotoneIcon] = useState(true);
    const { category, setCategory, sortMethod, filteredIcon, setFilteredIcon, iconsDisplayMethod, searchedText, setClickedIcon } = useContext(MenuContext);
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
            <div className="lg:flex lg:gap-8 w-[90%] mx-auto">
                <div className="hidden lg:block">
                    <h3 className="font-bold text-xs text-[#7c6f8a] pt-8 pb-2">STYLE</h3>
                    <div className="pt-2 px-2 lg:flex hidden flex-col gap-3">
                    </div>
                    <div onMouseEnter={() => setShowSolidIcon(false)} onMouseLeave={() => setShowSolidIcon(true)} className={`cursor-pointer hover:outline-1 hover:outline hover:outline-gray-300 rounded-lg flex items-center justify-between p-2 w-60 h-8`}>
                        <div className="flex items-center gap-2">
                            {showSolid ? <FaCircle className="w-3 h-3 text-gray-600" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>} <span className="text-sm">Solid</span>
                        </div>
                        <p className="text-gray-600">458</p>
                    </div>
                    <div onMouseEnter={() => setShowRegularIcon(false)} onMouseLeave={() => setShowRegularIcon(true)} className={`cursor-pointer hover:outline-1 hover:outline hover:outline-gray-300 rounded-lg flex items-center justify-between p-2 w-60 h-8`}>
                        <div className="flex items-center gap-2">
                            {showRegular ? <FaCircleHalfStroke className="w-3 h-3 text-gray-600" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>} <span className="text-sm">Regular</span>
                        </div>
                        <p className="text-gray-600">458</p>
                    </div>
                    <div onMouseEnter={() => setShowLightIcon(false)} onMouseLeave={() => setShowLightIcon(true)} className={`cursor-pointer hover:outline-1 hover:outline hover:outline-gray-300 rounded-lg flex items-center justify-between p-2 w-60 h-8`}>
                        <div className="flex items-center gap-2">
                            {showLight ? <FaCircle className="w-3 h-3 text-white border border-gray-600 rounded-full" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>} <span className="text-sm">Light</span>
                        </div>
                        <p className="text-gray-600">458</p>
                    </div>
                    <div onMouseEnter={() => setShowThinIcon(false)} onMouseLeave={() => setShowThinIcon(true)} className={`cursor-pointer hover:outline-1 hover:outline hover:outline-gray-300 rounded-lg flex items-center justify-between p-2 w-60 h-8`}>
                        <div className="flex items-center gap-2">
                            {showThin ? <FaCircle className="w-3 h-3 text-white border border-gray-600 rounded-full" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>} <span className="text-sm">Thin</span>
                        </div>
                        <p className="text-gray-600">229</p>
                    </div>
                    <div onMouseEnter={() => setShowDuotoneIcon(false)} onMouseLeave={() => setShowDuotoneIcon(true)} className={`cursor-pointer hover:outline-1 hover:outline hover:outline-gray-300 rounded-lg flex items-center justify-between p-2 w-60 h-8`}>
                        <div className="flex items-center gap-2">
                            {showDuotone ? <FaCircleHalfStroke className="w-3 h-3 text-gray-600 bg-slate-400 rounded-full" /> : <span className="border border-gray-600 w-3 h-3 rounded"></span>} <span className="text-sm">Duotone</span>
                        </div>
                        <p className="text-gray-600">229</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-10 mb-6">
                        {
                            /[a-zA-Z]/g.test(category) && <div className="flex">
                                {category.split(" ").map((icon, index) => /[a-zA-Z]/g.test(icon) && <div key={index} className="px-4 py-2 bg-white text-xs font-bold mx-2 rounded-full flex gap-4 items-center"> <span className="hover:text-blue-600">{icon.toUpperCase()}</span> <span onClick={() => setCategory(category.replace(icon, ""))} className="text-[10px] hover:text-red-600 cursor-pointer font-light ">x</span></div>)}
                                <button onClick={() => setCategory("")} className="hover:text-blue-600 hover:border-blue-600 py-1 px-2 font-bold rounded-full text-xs border border-gray-500">RESET</button>
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
