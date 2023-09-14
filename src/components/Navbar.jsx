import { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MenuContext } from '../provider/Context';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {searchedText, setSearchedText, filteredIcon} = useContext(MenuContext)

    const navItems = <>
        <li className='hover:text-blue-600'><a href='#'>Start</a></li>
        <li className='hover:text-blue-600'><a href="#"> {showMenu ? "Search" : <FaSearch />} </a></li>
        <li className='hover:text-blue-600'><a href='#'>Icons</a></li>
        <li className='hover:text-blue-600'><a href="#">Docs</a></li>
        <li className='hover:text-blue-600'><a href="#">Plans</a></li>
        <li className='hover:text-blue-600'><a href="#">Support</a></li>
        <li className='hover:text-blue-600'><a href="#">Podcast</a></li>
    </>
    return (
        <>
            <div className='py-6 flex justify-around'>
                <div className='lg:flex hidden gap-24 items-center'>
                    <a href="#"><img src={logo} alt="logo" className='w-8 h-8' /></a>
                    <ul className='flex text-lg text-[#667891] gap-14 items-center'>
                        {navItems}
                    </ul>
                </div>
                <ul>
                    <li className='cursor-pointer'> {showMenu ? <FaXmark title='close menu' onClick={() => setShowMenu(false)} /> : <FaBars onClick={() => setShowMenu(true)} className='lg:hidden'></FaBars>}  </li>
                </ul>

                <a href="#"><img src={logo} alt="logo" className='w-8 h-8 lg:hidden' /></a>
                <a href="#"><FaSignInAlt className='text-[#667891] w-6 h-6' /></a>
            </div>
            {
                showMenu && <div className='w-full lg:hidden min-h-[150px] px-24'>
                    <ul className='flex flex-col gap-2 font-medium'>
                        {navItems}
                    </ul>
                </div>
            }
            <form className=" my-4 mx-auto w-[60%] relative">
                <FaSearch className='inline text-gray-500 absolute top-[18px] left-4' />
                <input value={searchedText} onChange={(e)=>setSearchedText(e.target.value)} name='searchField' type="text" placeholder={`Search ${filteredIcon.length} icons...`} className="pl-10 input focus:border-blue-600 border-black border-2 rounded-full focus:border--400 min-h-14 w-full" />
            </form>
        </>
    );
};

export default Navbar;