import {
  House,
  Zap,
  CarFront,
  Clapperboard,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Smartphone,
  ShieldCheck,
  Wallet,
  CircleDollarSign,
} from "lucide-react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaGraduationCap, FaHouse, FaUtensils } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";
import { IoCarOutline, IoShieldCheckmark } from "react-icons/io5";
import { LuClapperboard, LuHeartPulse, LuWallet } from "react-icons/lu";
import { MdOutlineSmartphone } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";

type TBillCategory = {
    name: string
    icon: React.ReactNode 
    color: string,
    background: string,
}

export const billCategories: TBillCategory[] = [
  {
    name: "Housing",
    icon: <FaHouse />,
    color: "#397F83",
    background: "#E8F3F4",
  },
  {
    name: "Utilities",
    icon: <FiZap />,
    color: "#A47A18",
    background: "#FFF6D9",
  },
  {
    name: "Transportation",
    icon: <IoCarOutline />,
    color: "#4776C5",
    background: "#E6F0FF",
  },
  {
    name: "Entertainment",
    icon: <LuClapperboard />,
    color: "#8055C9",
    background: "#F0E9FF",
  },
  {
    name: "Health",
    icon: <LuHeartPulse />,
    color: "#C45B65",
    background: "#FDEBEC",
  },
  {
    name: "Education",
    icon: <FaGraduationCap />,
    color: "#6265B8",
    background: "#EAEAFF",
  },
  {
    name: "Shopping",
    icon: <RiShoppingBag4Line />,
    color: "#C05283",
    background: "#FCEAF2",
  },
  {
    name: "Food",
    icon: <FaUtensils />,
    color: "#C56A32",
    background: "#FFF0E5",
  },
  {
    name: "Phone",
    icon: <MdOutlineSmartphone />,
    color: "#4776C5",
    background: "#E6F0FF",
  },
  {
    name: "Insurance",
    icon: <IoShieldCheckmark />,
    color: "#25865B",
    background: "#E5F7EE",
  },
  {
    name: "Subscriptions",
    icon: <LuWallet />,
    color: "#8055C9",
    background: "#F0E9FF",
  },
  {
    name: "Other",
    icon: <AiFillDollarCircle  />,
    color: "#746B83",
    background: "#F0EDF4",
  },
];
