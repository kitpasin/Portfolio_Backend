/* eslint-disable */

// icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      style={{ boxShadow: "1px 1px 5px #808080" }}
      className="flex flex-none items-center bg-gradient-to-r from-blue-500 to-blue-900 border-gray-100 border-4 px-4 h-[70px]"
    >
      <div className="flex justify-between items-center w-full">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="cursor-pointer transition-all ease-in-out duration-300 hover:text-gray-300"
        >
          {sidebarOpen ? (
            <KeyboardArrowLeftIcon style={{ fontSize: "32px" }} />
          ) : (
            <KeyboardArrowRightIcon style={{ fontSize: "32px" }} />
          )}
        </div>
        <div>
          <AccountCircleIcon style={{ fontSize: "32px" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
