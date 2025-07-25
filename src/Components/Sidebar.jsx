import {useState} from "react"
import {NavLink} from "react-router-dom"

const Sidebar = ({props_data}) => {

    // const [ selectedMenu, setSelectedMenu ] = useState("profile")
    const {selectedMenu, setSelectedMenu} = props_data;
    return (
        <div className="w-[20%] h-[calc(100vh-90px)]">
            <aside
                id="logo-sidebar"
                className="left-0 h-full z-40  transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#242424] dark:bg-gray-800 rounded-md border">
                    <a
                        href="#"
                        className="flex items-center ps-2.5 mb-5"
                    >
                <span className="self-center text-xl font-semibold whitespace-nowra text-white">
                  Dashboard
                </span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li
                            className={
                                `${
                                    selectedMenu === 'profile'
                                        ? "bg-[#3e403f] rounded-lg"
                                        : ""
                                }`
                            }
                            onClick={() => setSelectedMenu("profile")}
                        >
                            <NavLink
                                href="#"
                                className="flex items-center p-2   rounded-lg text-white hover:bg-[#3e403f] dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-[#00DF9A] transition duration-75 dark:text-gray-400 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Profile</span>
                            </NavLink>
                        </li>
                        <li
                            className={
                                `${
                                    selectedMenu === 'blogs'
                                        ? "bg-[#3e403f] rounded-lg"
                                        : ""
                                }`
                            }
                            onClick={() => setSelectedMenu("blogs")}>
                            <a
                                href="#"
                                className="flex items-center p-2  rounded-lg text-white hover:bg-[#3e403f] dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-[#00DF9A] transition duration-75 dark:text-gray-400 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Blogs</span>
                            </a>
                        </li>
                        <li
                            className={
                                `${
                                    selectedMenu === 'contacts'
                                        ? "bg-[#3e403f] rounded-lg"
                                        : ""
                                }`
                            }
                            onClick={() => setSelectedMenu("contacts")}>
                            <a
                                href="#"
                                className="flex items-center p-2  rounded-lg text-white hover:bg-[#3e403f] dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-[#00DF9A] transition duration-75 dark:text-gray-400 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Contacts</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}
export default Sidebar