import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { Particle } from "./Particle";
import Link from "next/link";
import { motion } from "framer-motion";
import { Animation } from "./utils/animation";

export const Home = () => {
    return (
        <div className="min-h-full h-full w-full bg-primary/60 relative">
            {/* top left img */}
            <div className="w-[240px] h-[250px] lg:w-[400px] lg:h-[400px] absolute left-0 top-0">
                <Image
                    src={"/top-left-img.png"}
                    fill
                    alt="img"
                    className="mix-blend-color-dodge opacity-50 object-contain object-left-top select-none"
                    draggable={false}
                />
            </div>
            {/* text */}
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 ">
                <div className="text-center flex flex-col justify-center items-center lg:items-start lg:pt-48 lg:text-left h-full mx-auto container">
                    <motion.h1
                        variants={Animation("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit={"hidden"}
                        className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-8 font-semibold"
                    >
                        Transforming Ideas <br /> Into{" "}
                        <span className="text-accent">Digital Reality</span>
                    </motion.h1>

                    <motion.p
                        variants={Animation("down", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit={"hidden"}
                        className="max-w-sm lg:max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-16 text-white/60 leading-[1.7] text-sm md:text-base"
                    >
                        Elevate your digital presence with expert full stack
                        development solutions. From captivating front-end
                        designs to robust back-end functionality, I specialize
                        in crafting tailor-made web applications that drive
                        results. Let&apos;s bring your vision to life.
                    </motion.p>
                    <motion.div
                        variants={Animation("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit={"hidden"}
                    >
                        <Link
                            href={"/work"}
                            className="bg-[url('/circle-star.svg')] bg-no-repeat bg-contain bg-center w-[15vmax] h-[15vmax] xl:w-[10vmax] xl:h-[10vmax] max-w-[200px] max-h-[200px] text-white flex items-center justify-center relative group z-10"
                        >
                            <div className="relative w-3/4 h-3/4">
                                <Image
                                    src={"/rounded-text.png"}
                                    fill
                                    alt=""
                                    className="animate-spin-slow w-full h-full object-contain"
                                />
                            </div>
                            <HiArrowRight className="absolute text-lg lg:text-4xl group-hover:translate-x-3 transition-all duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* image */}
            <div className="w-full xl:w-[1200px] h-full absolute  right-0 bottom-0">
                <div className="bg-none xl:bg-[url('/bg-explosion.png')] xl:bg-no-repeat xl:bg-right xl:bg-cover w-full h-full absolute translateZ-0 mix-blend-color-dodge" />
                <Particle />
                <motion.div
                    variants={Animation("up", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit={"hidden"}
                    className="hidden xl:flex w-full h-full max-w-[650px] max-h-[650px] absolute -bottom-20 right-[15%]"
                >
                    <Image
                        src={"/aditya-avatar2.png"}
                        width={500}
                        height={500}
                        alt="avatar"
                        className="w-full h-full select-none"
                        draggable={false}
                    />
                </motion.div>
            </div>
        </div>
    );
};
