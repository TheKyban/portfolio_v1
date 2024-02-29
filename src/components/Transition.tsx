import { motion } from "framer-motion";

const transitionVarients = {
    start: { x: "100%", width: "100%" },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};

export const Transition = () => {
    return (
        <>
            <motion.div
                variants={transitionVarients}
                initial="start"
                exit={"exit"}
                animate="animate"
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="fixed bg-[#2e2257] w-screen h-screen top-0 bottom-0 right-full z-30"
            ></motion.div>
            <motion.div
                variants={transitionVarients}
                initial="start"
                exit={"exit"}
                animate="animate"
                transition={{
                    delay: 0.4,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="fixed bg-[#3b2d71] w-screen h-screen top-0 bottom-0 right-full z-20"
            ></motion.div>
            <motion.div
                variants={transitionVarients}
                initial="start"
                exit={"exit"}
                animate="animate"
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="fixed bg-[#4b3792] w-screen h-screen top-0 bottom-0 right-full z-10"
            ></motion.div>
        </>
    );
};
