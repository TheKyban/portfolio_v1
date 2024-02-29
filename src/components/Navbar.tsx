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
        <div>
            {NavLinks?.map((link) => (
                <Link href={link.path} key={link?.name}>
                    {link?.icon}
                </Link>
            ))}
        </div>
    );
};
