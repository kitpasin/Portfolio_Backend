/* eslint-disable */

// data
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

function Sidebar({ sidebarOpen }) {
  return (
    <div
      style={{ boxShadow: "1px 1px 5px #808080" }}
      className={`bg-gradient-to-b from-blue-500 to-blue-900 w-full p-4 ${
        sidebarOpen ? "max-w-[270px]" : "max-w-[70px]"
      } h-screen transition-width ease-in-out duration-300 border-4 border-gray-100`}
    >
      <div className="flex flex-col gap-4">
        <div className={`flex flex-col justify-start items-center gap-4 text-xl`}>
          {sidebarOpen && <p>Portfolio Management</p>}
          <figure className="w-full max-w-[150px]">
            <img className="rounded-full" src="/images/march7.jpg" />
          </figure>
        </div>
        <div className="flex flex-col gap-2 text-xl">
          {sidebarOpen && <p>Menu</p>}
          {SidebarMenu.map((menu, index) => (
            <div
              key={index}
              className={`${sidebarOpen ? "p-2" : "p-1"} rounded-md hover:bg-blue-900 transition-all ease-in-out duration-300`}
            >
              <Link to={menu.path} className="flex justify-start items-center gap-4">
                {menu.icon}
                {sidebarOpen && menu.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
