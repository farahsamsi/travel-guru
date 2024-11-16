import { NavLink } from "react-router-dom";
import travelLogo from '../assets/Group 1330.png'
import { IoSearch } from "react-icons/io5";


const Navbar = () => {

    const links = <>
        <li className={'font-medium'}><NavLink to='/news'>News</NavLink></li>
        <li className={'font-medium'}><NavLink to='/destination'>Destination</NavLink></li>
        <li className={'font-medium'}><NavLink to='/blog'>Blog</NavLink></li>
        <li className={'font-medium'}><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar text-white py-6 justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                        <div className="form-control relative">
                            <IoSearch className="text-[24px] text-white/35 absolute left-[0.7rem] top-[28%]" />
                            <input type="text" placeholder="Search Your Destination" className="bg-white/15  p-3 rounded pl-[40px]" />
                        </div>
                    </ul>
                </div>

                <div className="hidden lg:flex w-[120px]">
                    <img className="w-full" src={travelLogo} alt="" />
                </div>
            </div>

            <div className="lg:hidden w-[80px]">
                <img className="w-full" src={travelLogo} alt="" />
            </div>

            <div className="form-control relative hidden lg:flex">
                <IoSearch className="text-[24px] text-white/35 absolute left-[0.7rem] top-[28%]" />
                <input type="text" placeholder="Search Your Destination" className="bg-white/15  p-3 w-[300px] rounded pl-[40px]" />
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="">
                <a className="btn bg-primary rounded md:py-3 md:px-7 border-none">Login</a>
            </div>
        </div>
    );
};

export default Navbar;