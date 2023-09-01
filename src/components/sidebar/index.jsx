import { useState } from "react";
import { GiStarsStack } from "react-icons/gi";
import { AiFillAppstore } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { BsWalletFill } from "react-icons/bs";
import { PiNotepadFill } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenMenuIndex(-1);
  };
  const Menus = [
    { title: "Dashboard", src: GiStarsStack, to: "/" },
    { title: "Inbox", src: AiFillAppstore, to: "/about" },
    { title: "Accounts", src: RiTeamFill },
    { title: "Schedule ", src: ImHome },
    { title: "Search", src: BsWalletFill },
    { title: "Analytics", src: GiStarsStack },
    { title: "Files ", src: PiNotepadFill },
    { title: "Logout ", src: TbLogout },
  ];

  return (
    <div
      className={`${"w-16"} bg-[#f1f5f9] relative duration-300 rounded-xl`}
    >
      <ul className="">
        {Menus.map((Menu, index) => (
          <Link key={index} to={Menu.to}>
            <li
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`flex justify-center p-2 rounded-md cursor-pointer hover:bg-[rgba(255,255,255,0.17)] text-gray-300 text-sm items-center gap-x-4 
            ${index === Menus.length - 1 && "absolute bottom-12 w-full"} `}
            >
              <Menu.src
                className={`w-8 h-8 ${
                  index === Menus.length - 1
                    ? "text-[#fc1e00]"
                    : "text-[#8397aa]"
                }`}
              />
              <span
                className={`absolute left-16 origin-left ${
                  openMenuIndex === index ? "px-3 opacity-1" : "w-0 opacity-0"
                } py-3 rounded-md  delay-800 duration-500 text-center text-black bg-[#f1f5f9]`}
              >
                {Menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
