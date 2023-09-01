import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaToggleOff } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if it's open and the click is outside the button or dropdown
      if (
        user &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setUser(false);
      }
    };

    // Add the event listener to the document body
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [user]);
  return (
    <div className="grid gap-4 md:flex md:justify-between p-10">
      <div className="w-100">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none bg-[#d8dbde] rounded-l-3xl shadow-2xl">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-white shadow-2xl text-gray-900 text-sm rounded-3xl focus:ring-white focus:border focus:border-white block w-full pl-10 p-2.5"
            placeholder="Search branch name..."
            required
          />
        </div>
      </div>
      <div className="flex space-x-3 items-center md:order-2">
        <FaToggleOff className="w-8 h-8" />
        <div>
          <h3 className="text-base text-[#131314] font-medium">
            Hello, Developer User
          </h3>
          <p className="text-xs text-[#a8a8a8]">Helpdesk Record Manager</p>
        </div>
        <button
          onClick={() => setUser(!user)}
          type="button"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="user photo"
          />
        </button>
        {user && (
          <div
            ref={dropdownRef}
            className="z-50 absolute top-16 right-16 my-4 ml-7 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
