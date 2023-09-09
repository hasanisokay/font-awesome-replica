import { FaBolt, FaListUl } from 'react-icons/fa6';
import sharp from '../assets/fa-sharp.png';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { useContext } from 'react';
import { MenuContext } from '../provider/Context';

const Categories = () => {
    const { setSortMethod, category, setCategory, iconsDisplayMethod, setIconsDisplayMethod } = useContext(MenuContext);
    return (
        <div className='flex items-center lg:gap-0 gap-2  lg:flex-row flex-col justify-around my-4 lg:w-[75%] w-[90%] mx-auto'>
            <div className='flex items-center gap-10 pt-8 pb-4'>
                <div onClick={() => setCategory(category.includes("classic") ? category.replace("classic", "") : category + " classic")} className={`${category.includes("classic") ? "border-b-blue-600 text-blue-500 border-b-4" : ""} hover:border-b-4 cursor-pointer hover:border-b-blue-600 hover:text-blue-500  flex flex-col items-center lg:w-20 w-16 h-20`}>
                    <img src={sharp} alt="classic" className='h-8' />
                    <span>Classic</span>
                </div>
                <div onClick={() => setCategory(category.includes("sharp") ? category.replace("sharp", "") : category + " sharp")} className={`${category.includes("sharp") ? "border-b-blue-600 text-blue-500 border-b-4" : ""} hover:border-b-4 cursor-pointer hover:border-b-blue-600 hover:text-blue-500  flex flex-col items-center h-20 lg:w-20 w-16`}>
                    <img src={sharp} alt="sharp" className='h-8' />
                    <span>Sharp</span>
                </div>
                <div onClick={() => setCategory(category.includes("brands") ? category.replace("brands", "") : category + " brands")} className={`${category.includes("brands") ? "border-b-blue-600 text-blue-500 border-b-4" : ""} hover:border-b-4 cursor-pointer hover:border-b-blue-600 hover:text-blue-500 flex flex-col items-center lg:w-20 w-16 h-20`}>
                    <FaFontAwesomeFlag className='h-8' />
                    <span>Brands</span>
                </div>
                <div onClick={() => setCategory(category.includes("free") ? category.replace("free", "") : category + " free")} className={`${category.includes("free") ? "border-b-blue-600 text-blue-500 border-b-4" : ""} hover:border-b-4 cursor-pointer hover:border-b-blue-600 hover:text-blue-500 flex flex-col items-center lg:w-20 w-16 h-20`}>
                    <FaBolt className='h-8' />
                    <span>Free</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex gap-4'>
                    <BsFillGridFill onClick={() => setIconsDisplayMethod("roomy")} className={`w-4 h-4 cursor-pointer hover:text-blue-600  ${iconsDisplayMethod === "roomy" && "text-blue-600"}`} />
                    <BsFillGrid3X3GapFill onClick={() => setIconsDisplayMethod("compact")} className={`hover:text-blue-600 w-4 h-4 cursor-pointer ${iconsDisplayMethod === "compact" && "text-blue-600"}`} />
                    <FaListUl onClick={() => setIconsDisplayMethod("list")} className={`hover:text-blue-600 w-4 h-4 cursor-pointer ${iconsDisplayMethod === "list" && "text-blue-600"}`} />
                </div>
                <div>
                    <select onChange={(e) => setSortMethod(e.target.value)} className="select select-bordered border-2 font-medium w-full max-w-xs">
                        <option value={"Featured"}>Featured</option>
                        <option value={"Alphabetical"}>Alphabetical</option>
                    </select>
                </div>
                <div>
                    <select className="select select-bordered border-2 font-medium w-full max-w-xs">
                        <option>6.4.2</option>
                        <option>5.15.4</option>
                        <option>All Versions</option>
                    </select>
                </div>
            </div>
        </div>

    );
};

export default Categories;