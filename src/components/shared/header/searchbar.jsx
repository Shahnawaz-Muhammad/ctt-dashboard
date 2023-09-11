import { HiOutlineSearch } from "react-icons/hi";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

function SearchBar() {
  const [selectedOption, setSelectedOption] = useState("Phase");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.innerText); 
    toggleDropdown(); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const { enabled, setEnabled } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="flex flex-row z-50">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <div className="relative hidden md:flex items-center">
            <div
              className={`${
                enabled ? "bg-gray-700 text-white" : "bg-greyDark text-gray-800"
              } absolute  -left-1 top-1/2 shadow-md rounded-l-full -translate-y-1/2 h-full flex items-center px-3`}
            >
              <HiOutlineSearch fontSize={20} />
            </div>
            <input
              type="text"
              placeholder="Type Your Search..."
              className={`${
                enabled ? "bg-gray-300 text-white" : "bg-white text-black"
              } text-sm focus:outline-none active:outline-none shadow-lg w-[22rem] lg:w-[25rem] h-10 pl-14 pr-44 rounded-full`}
            />
            <div
              className={`${
                enabled ? "bg-gray-700 text-white" : "bg-greyDark text-black"
              } absolute inset-y-0 top-0 right-0 text-center w-cover shadow-lg rounded-r-full h-10 flex items-center justify-between`}
            >
              <button
                onClick={toggleDropdown}
                onChange={handleThemeChange}
                className={`${
                  enabled ? "text-gray-100 bg-gray-700" : "text-gray-800"
                } focus:outline-none font-medium rounded-r-full text-sm px-5 py-2.5 text-center inline-flex items-center `}
                type="button"
              >
                {selectedOption}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className={`${
                    enabled ? "text-gray-100" : "text-gray-800"
                  } absolute w-[6rem] inset-x-0 top-10 text-center  shadow-md rounded-lg flex flex-col items-center`}
                  onClick={toggleDropdown}
                >
                  <div className="py-2 text-sm">
                    <a
                      onClick={handleOptionChange}
                      className={`${
                        enabled
                          ? "bg-gray-700 text-white"
                          : "bg-white text-black"
                      } hover:bg-gray-500 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black block px-4 py-2 cursor-pointer`}
                    >
                      Phase
                    </a>
                    <a
                      onClick={handleOptionChange}
                      className={`${
                        enabled
                          ? "bg-gray-700 text-white"
                          : "bg-white text-black"
                      } hover:bg-gray-500 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black block px-4 py-2 cursor-pointer`}
                    >
                      Phase-I
                    </a>
                    <a
                      onClick={handleOptionChange}
                      className={`${
                        enabled
                          ? "bg-gray-700 text-white"
                          : "bg-white text-black"
                      } hover:bg-gray-500 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black block px-4 py-2 cursor-pointer`}
                    >
                      Phase-II
                    </a>
                    <a
                      onClick={handleOptionChange}
                      className={`${
                        enabled
                          ? "bg-gray-700 text-white"
                          : "bg-white text-black"
                      } hover:bg-gray-500 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black block px-4 py-2 cursor-pointer`}
                    >
                      Phase-III
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SearchBar;
