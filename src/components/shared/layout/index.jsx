import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

export default function Layout() {

  const {enabled} = useContext(ThemeContext)
  return (
    <div className={`${enabled ? "bg-gray-400 " : "bg-gray-100"} h-screen w-full max-w-[100%] overflow-hidden flex mx-auto flex-row  lg:px-8 py-5 `}>
      <div className="flex flex-col gap-4">
        <Header />
        <div className="flex flex-row flex-1 overflow-auto">
          <Sidebar />
          <div className="flex-1 min-h-0 max-h-screen overflow-auto bg-greyDark mx-8 rounded-2xl">
            <div className="w-full py-5 px-5 md:px-10 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
