import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";

export const SidebarItems = {
  SidebarTop: [
    { icon: <AiOutlineHome size={21} />, name: "Home", to: '/' },
    { icon: <BiUserCircle size={21} />, name: "Profile", to: '/profile' },
    { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions", to: '/'  },
  ],
  SidebarMiddle: [
    { icon: <MdOutlineVideoLibrary size={21} />, name: "Library", to: '/'  },
    { icon: <VscHistory size={21} />, name: "History", to: '/'  },
    { icon: <AiOutlineClockCircle size={21} />, name: "Watch later", to: '/'  },
    { icon: <AiOutlineHeart size={21} />, name: "Liked videos", to: '/'  },
  ],
  SidebarExplore: [
    { icon: <IoMusicalNoteOutline size={21} />, name: "Music", to: '/'  },
    { icon: <IoGameControllerOutline size={21} />, name: "Gaming", to: '/'  },
    { icon: <CiTrophy size={23} />, name: "Sports", to: '/'  },
  ],
};