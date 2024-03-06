import Link from "next/link";
import {
    RiGithubFill,
    RiLinkedinFill,
    RiTwitterFill,
    RiWhatsappFill,
} from "react-icons/ri";

const links = [
    {
        name: "Linkedin",
        path: "https://www.linkedin.com/in/thekyban",
        icon: <RiLinkedinFill />,
    },
    {
        name: "Twitter",
        path: "https://www.twitter.com/thekyban",
        icon: <RiTwitterFill />,
    },
    {
        name: "WhatsApp",
        path: "https://wa.me/7479796212",
        icon: <RiWhatsappFill />,
    },
    {
        name: "Github",
        path: "https://www.github.com/thekyban",
        icon: <RiGithubFill />,
    },
];

export const Header = () => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 container pt-8 md:pt-3 z-10">
            {/* Logo */}

            <div className=" flex items-center flex-col gap-4 md:flex-row justify-center md:justify-between w-full">
                <Link href={"/"} className="lg:self-end flex items-end">
                    <span className="font-semibold text-4xl leading-none">
                        aditya
                    </span>
                    <span className="ml-2 text-4xl font-[200] leading-none">
                        kumar
                    </span>
                    <span className="text-5xl font-[200] text-rose-400 leading-none">
                        .
                    </span>
                </Link>

                <div className="md:self-end flex items-center gap-3 text-xl">
                    {links?.map((social) => (
                        <Link
                            key={social.name}
                            href={social.path}
                            target="_blank"
                            className="hover:text-accent transition-all duration-200"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
