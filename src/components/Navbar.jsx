import { useEffect, useState } from "react";
import logo from "../assets/Icon.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "../assets/data/index";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";



const Navbar = () => {
  const [mobileOpen, setmobileOpen] = useState(false);
  const [changeColor, setchangeColor] = useState(false);

  const changeBackgroundColor = () => {
    setchangeColor(window.scrollY > 10);
  };

  useEffect(() => {
    // Panggil fungsi pertama kali
    changeBackgroundColor();

    // Tambahkan event listener scroll dengan cleanup
    window.addEventListener('scroll', changeBackgroundColor);

    // Cleanup event listener pada komponen unmount
    return () => {
      window.removeEventListener('scroll', changeBackgroundColor);
    };
  }, []);
  return (
    <header className={`fixed bg-white py-2 transition-all ease-in animate__animated animate__fadeInDown w-full top-0 left-0 z-50 ${changeColor ? 'lg:bg-white lg:py-4' : 'lg:bg-transparent'}`}>
      <div className="flex items-center justify-between container px-4 mx-auto flex-wrap w-full">
        <div className="flex justify-between items-center space-x-2">
          <img src={logo} alt="" className="w-9" />
          <h1 className="text-2xl font-bold text-gray-900">Nexcent</h1>
        </div>
        <button className="lg:hidden block cursor-pointer text-lg" onClick={()=>setmobileOpen(!mobileOpen)}>
        {mobileOpen ? <FaXmark/> : <FaBarsStaggered/>}
        </button>
        <nav className={`lg:flex ${mobileOpen ? 'block':'hidden'} lg:items-center lg:w-auto w-full`}>
          <div className="lg:flex lg:space-x-12 mx-auto lg:pt-0 pt-4 text-gray-900">
            {navLinks.map((link) => {
              return (
                <a className="block lg:inline-block lg:mb-0 mb-4" key={link.id}>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </a>
              );
            })}
          </div>
        </nav>
        <div className={`text-md ${mobileOpen ? 'block':'hidden'} lg:block`}>
        <button className="px-4 py-1 text-brandPrimary hover:text-gray-900">
          Login
        </button>
        <button className="bg-brandPrimary rounded-md px-4 py-2 text-white hover:bg-brandPrimaryshade">
          Sign Up
        </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
