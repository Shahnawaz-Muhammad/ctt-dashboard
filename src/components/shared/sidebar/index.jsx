// import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/constants";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-300 hover:no-underline active:bg-neutral-400 rounded-sm text-base";
  // 

export default function Sidebar() {
  return (
    <div className="bg-greyDark px-3 py-10 flex flex-col rounded-2xl justify-between ">
      <div>
        <div className="flex items-center px-1">
          <FcBullish fontSize={34} />
          {/* <span className="text-neutral-200 text-lg">OpenShop</span> */}
        </div>
        <div className="py-8 flex  flex-col ">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0.5 ">
        <div className={`cursor-pointer text-red-500, ${linkClass}`}>
          <span >
            <HiOutlineLogout className="text-red text-3xl"/>
          </span>
          {/* Logout */}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={` ${linkClass}`}
    >
      <span className={`${
        pathname === link.path
          ? " text-gray-500"
          : "text-gray-700"
      }, text-2xl`}>{link.icon}</span>
    </Link>
  );
}

SidebarLink.propTypes = {
  link: PropTypes.shape({
    key: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
