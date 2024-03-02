import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Transition } from "@/components/Transition";
import "@/styles/globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <div
            className={`w-full h-screen overflow-hidden relative bg-[url('/site-bg.svg')] text-white bg-cover bg-no-repeat ${sora.className}`}
        >
            <Header />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div key={router.route} className="h-full w-full">
                    <Transition />
                    <Component {...pageProps} />;
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
