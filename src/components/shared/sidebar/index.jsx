// import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/constants";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/themeContext";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 rounded-sm text-base";
//

export default function Sidebar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showLogoout, setShowLogout] = useState(false);

  const { enabled } = useContext(ThemeContext);

  const handleMouseEnter = (iconKey) => {
    setHoveredIcon(iconKey);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
    setShowLogout(false);
  };
  return (
    <div
      className={`${
        enabled ? "bg-gray-600" : "bg-greyDark"
      }  lg:px-3 py-10 flex flex-col rounded-2xl justify-between`}
    >
      <div>
        <div className="flex items-center px-1">
          <FcBullish fontSize={34} />
          {/* <span className="text-neutral-200 text-lg">OpenShop</span> */}
        </div>
        <div className="py-8 flex  flex-col  ">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink
              key={link.key}
              link={link}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              isHovered={hoveredIcon === link.key}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0.5 relative">
        <div
          className={`${enabled ? "hover:bg-slate-800" : "hover:bg-slate-300"} cursor-pointer text-red-500 , ${linkClass}`}
          onMouseEnter={() => setShowLogout(true)}
          onMouseLeave={handleMouseLeave}
        >
          <span>
            <HiOutlineLogout className="text-red text-3xl" />
          </span>
          {showLogoout && (
            <span className="bg-greyDark  px-3 py-2 rounded-r-lg shadow-xl absolute left-14 font-semibold">
              Logout
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link, handleMouseEnter, handleMouseLeave, isHovered }) {
  const { pathname } = useLocation();
  const { enabled } = useContext(ThemeContext);

  return (
    <Link
      to={link.path}
      className={` ${linkClass} relative w-full h-full ${enabled ? "hover:bg-slate-800" : "hover:bg-slate-300"}`}
      onMouseEnter={() => handleMouseEnter(link.key)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          pathname === link.path ? " text-gray-500" : "text-gray-700"
        }, text-2xl ${enabled ? "text-gray-300" : "text-gray-600"}`}
      >
        {link.icon}
      </div>
      {/* <span className={`${showTitle ? "flex" : "hidden"} bg-greyDark px-3 py-1 rounded-r-lg absolute  left-14`}>{link.label}</span> */}
      {isHovered && (
        <div className={`${enabled ? "bg-gray-600" : "bg-gray-300"} px-3 py-2 rounded-r-lg shadow-xl absolute top-0 left-14 font-semibold`}>
          <div className="flex flex-col gap-2 ">
          <span className="">{link.label}</span>
          {link.subItems && (
            <div className="mt-3">
              {link.subItems.map((subItem) => (
                <Link
                  key={subItem.key}
                  to={subItem.path}
                  className={` ${linkClass} ${
                      pathname === subItem.path
                        ? " text-gray-500"
                        : "text-gray-700"
                    }, relative w-full h-full  text-md ${enabled ? "text-gray-300 hover:bg-gray-500 " : "bg-gray-300 hover:bg-gray-200 text-black"}`}
                >
                  {/* <div
                    className={` `}
                  >
                    {subItem.icon}
                  </div> */}
                  <span className="rounded-r-lg   left-14 font-semibold">
                    {subItem.label}
                  </span>
                </Link>
              ))}
            </div>
          )}
          </div>
        </div>
      )}
    </Link>
  );
}

SidebarLink.propTypes = {
  link: PropTypes.shape({
    key: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  isHovered: PropTypes.bool.isRequired,
};
