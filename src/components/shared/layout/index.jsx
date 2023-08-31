import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";

export default function Layout() {
  return (
    // <div className="bg-gray-100 h-screen w-screen overflow-hidden flex flex-row px-8 py-5">
    //   <div className="flex items-end">
    //     <Sidebar />
    //   </div>{" "}
    //   <div className="flex flex-col flex-1">
    //     <Header />
    //     <div className="flex-1 p-4 min-h-0 overflow-auto bg-greyDark mx-8 rounded-2xl">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-100 h-screen w-full overflow-hidden flex mx-auto flex-row px-8 py-5">
      <div className="flex flex-col gap-4">
        <Header />
        <div className="flex flex-row flex-1 ">
          <Sidebar />
          <div className="flex-1 p-4 min-h-0 max-h-screen overflow-auto bg-greyDark mx-8 rounded-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
