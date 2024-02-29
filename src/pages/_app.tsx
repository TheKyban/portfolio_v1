import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Transition } from "@/components/Transition";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <div className="w-full h-full relative">
            <Header />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div key={router.route} className="h-full">
                    <Transition />
                    <Component {...pageProps} />;
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
