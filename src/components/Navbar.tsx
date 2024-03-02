import Link from "next/link";
import {
    HiChatBubbleBottomCenterText,
    HiEnvelope,
    HiHome,
    HiRectangleGroup,
    HiUser,
    HiViewColumns,
} from "react-icons/hi2";
const NavLinks = [
    { name: "home", path: "/", icon: <HiHome /> },
    { name: "about", path: "/about", icon: <HiUser /> },
    { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "work", path: "/work", icon: <HiViewColumns /> },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: "contact",
        path: "/contact",
        icon: <HiEnvelope />,
    },
];
export const Navbar = () => {
    return (
        <div className="flex items-center lg:justify-center fixed h-max bottom-0 mt-auto top-0 lg:right-[2%] z-50 w-full lg:max-w-md lg:w-16 lg:h-screen">
            <div className="flex lg:flex-col w-full items-center justify-between gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] lg:h-max bg-white/10 backdrop-blur-sm text-3xl lg:rounded-full py-8">
                {NavLinks?.map((link) => (
                    <Link href={link.path} key={link?.name}>
                        {link?.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};
