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
    const { category, sortMethod, iconsDisplayMethod, searchedText, setClickedIcon } = useContext(MenuContext)
    const [filteredIcon, setFilteredIcon] = useState(iconsData);
console.log(searchedText);
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
        setFilteredIcon(filteredIcons.filter((icon)=>icon.name.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase() || "")));
    }, [category, sortMethod, searchedText])

    return (
        <div className="bg-[#f0f1f3] min-h-[100vh]">
            <div className="lg:flex w-[90%] mx-auto">
                <div className="hidden lg:block">
                    <h3 className="font-bold text-xs text-[#7c6f8a]  pt-[16px]">STYLE</h3>
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

                    <h3 className="font-bold lg:text-xl text-lg px-[16px] pt-[16px]">{filteredIcon.length} Icons</h3>
                    <div className={` flex flex-wrap gap-4 px-[16px] py-[16px] `} >
                        {filteredIcon.map((iconInfo, index) => <div onClick={() => handleIconClik(iconInfo)} className={`relative ${iconsDisplayMethod === "list" && "flex-row p-2 w-32 h-12"} ${iconsDisplayMethod === "compact" && "p-8 w-32 h-32 flex-col"} ${iconsDisplayMethod === "roomy" && "lg:w-40 lg:h-40 w-36 h-36 p-10 flex-col"} cursor-pointer duration-300  flex items-center gap-2 rounded bg-white hover:bg-[#ffd43b]`} key={index}>
                            <GetIconByName name={iconInfo.name} />
                            {iconInfo.type ==="pro" && <span className={`px-2 ${ iconsDisplayMethod ==="list" ? "right-4" :""} -top-2 text-[10px] absolute  font-semibold text-center rounded-xl bg-[#ffd43b] `}>PRO</span> }
                            <span className="text-sm">{iconInfo.name.replace("Fa", "")}</span>
                        </div>)}
                    </div>
                    <Modal></Modal>
                </div>
            </div>
        </div>

    );
};

export default Icons;
