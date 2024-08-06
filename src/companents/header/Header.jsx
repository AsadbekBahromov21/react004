import React, { useState } from 'react'
import "./header.css"
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import navlogo from "../../assets/el.webp"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const links = ["Home", "About", "Blog", "Kitoblar", "Badiy kitoblar"]
    return (
        <div className='container mx-auto mb-6'>
            <nav className="navbar flex py-5 items-center justify-between">
                <div className="navbar__logo">
                    <img className='w-20' src={navlogo} alt="" />
                </div>
                <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
                    <ul className="navbar__collection flex gap-8 font-medium">
                        {
                            links.map((el, index) => (<li className="navbar__item"><a key={index} href="#">{el}<span></span></a></li>))
                        }
                    </ul>
                </div>
                <div className="navbar__icon flex gap-7">
                    <IoSearchOutline className='size-5' />
                    <CiUser className='size-5' />
                    <IoCartOutline className='size-5' />
                </div>

                <div onClick={toggleMenu} className="navbar__menu">
                    <RiMenu2Fill />
                </div>
            </nav>
        </div>
    )
}

export default Header