import logo from "../assets/Icon2.png";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaBasketball,
} from "react-icons/fa6";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { navCompany, navSupport } from "../assets/data";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#263238] py-10">
      <div className="container flex items-center justify-center mx-auto">
        <div className="container mx-auto flex justify-center gap-40">
          <div className="flex flex-col ">
            <div className="flex items-center gap-2 mb-5">
              <img src={logo} alt="" className="w-9" />
              <h1 className="font-bold text-3xl text-white">Nexcent</h1>
            </div>
            <div className="text-sm text-neutralSilver py-5">
              <p>Copyright &copy; {new Date().getFullYear()} DeapCreate.</p>
              <p>All Right Reserved</p>
              <p className="hover:text-gray-600">
                <a
                  href="https://www.figma.com/@itsmuntasirb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Web Creator - Muntasir Billah
                </a>
              </p>
            </div>
            <div className="flex my-4 gap-2">
              <a href="/">
                <div className="bg-gray-700 rounded-full flex justify-center items-center w-10 h-10">
                  <FaInstagram className="text-xl text-neutralSilver" />
                </div>
              </a>
              <a href="/">
                <div className="bg-gray-700 rounded-full flex justify-center items-center w-10 h-10">
                  <FaBasketball className="text-xl text-neutralSilver" />
                </div>
              </a>
              <a href="/">
                <div className="bg-gray-700 rounded-full flex justify-center items-center w-10 h-10">
                  <FaXTwitter className="text-xl text-neutralSilver" />
                </div>
              </a>
              <a href="/">
                <div className="bg-gray-700 rounded-full flex justify-center items-center w-10 h-10">
                  <FaYoutube className="text-xl text-neutralSilver" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-12">
          <div className="flex flex-col">
            <h1 className="text-white font-semibold text-xl">Company</h1>
            <div className="lg:flex flex-col mt-6 text-neutralSilver">
              {navCompany.map((link) => {
                return (
                  <a
                    className="block lg:inline-block lg:mb-0 pb-3"
                    key={link.id}
                  >
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-semibold text-xl">Support</h1>
            <div className="lg:flex flex-col mt-6 text-neutralSilver">
              {navSupport.map((link) => {
                return (
                  <a
                    className="block lg:inline-block lg:mb-0 pb-3"
                    key={link.id}
                  >
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </a>
                );
              })}
            </div>
          </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-semibold text-xl">
              Stay up to date
            </h1>
            <div className=" flex bg-black rounded-xl px-1 py-2 items-center w-3/4">
              <input
                className=" appearance-none bg-transparent border-none w-3/4 text-gray-700 py-2 px-3 leading-tight focus:outline-none focus:border-none focus:ring-0"
                type="email"
                placeholder="Your email"
                aria-label="Email address"
              />
              <button className="pl-3 ml-4">
                <HiMiniPaperAirplane className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
// 

export default Footer;
