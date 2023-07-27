/* eslint-disable */

// icons
import PersonIcon from "@mui/icons-material/Person";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";

const SidebarMenu = [
  {
    path: "/about",
    title: "About Me",
    icon: <PersonIcon />,
  },
  {
    path: "/skills",
    title: "My Skills",
    icon: <HowToRegIcon />,
  },
  {
    path: "/projects",
    title: "My Projects",
    icon: <WorkIcon />,
  },
  {
    path: "/contacts",
    title: "My Contacts",
    icon: <PhoneIcon />,
  },
];

export default SidebarMenu;
