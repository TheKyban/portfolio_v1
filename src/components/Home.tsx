import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { Particle } from "./Particle";
import Link from "next/link";

export const Home = () => {
    return (
        <div className="min-h-full h-full w-full bg-primary/60">
            {/* text */}
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 ">
                <div className="text-center flex flex-col justify-center items-center lg:items-start lg:pt-48 lg:text-left h-full mx-auto container">
                    <h1 className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-8 font-semibold">
                        Transforming Ideas <br /> Into{" "}
                        <span className="text-accent">Digital Reality</span>
                    </h1>

                    <p className="max-w-sm lg:max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-16 text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat animi molestiae veritatis accusamus quibusdam
                        natus et nemo, perferendis quos optio quam vel at quasi
                        eligendi rem veniam earum hic quidem.
                    </p>

                    <Link href={'/work'} className="bg-[url('/circle-star.svg')] bg-no-repeat bg-contain bg-center w-[185px] h-[185px] text-white flex items-center justify-center relative group z-10">
                        <Image
                            src={"/rounded-text.png"}
                            width={141}
                            height={148}
                            alt=""
                            className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
                        />

                        <HiArrowRight className="absolute text-4xl group-hover:translate-x-3 transition-all duration-300" />
                    </Link>
                </div>
            </div>

            {/* image */}
            <div className="w-full lg:w-[1200px] h-full absolute  right-0 bottom-0">
                <div className="bg-none lg:bg-[url('/bg-explosion.png')] lg:bg-no-repeat lg:bg-right lg:bg-cover w-full h-full absolute translateZ-0 mix-blend-color-dodge" />
                <Particle />
                <div className="hidden lg:flex w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 right-[8%]">
                    <Image
                        src={"/avatar.png"}
                        width={737}
                        height={678}
                        alt="avatar"
                        className="w-full h-full select-none"
                    />
                </div>
            </div>
        </div>
    );
};
