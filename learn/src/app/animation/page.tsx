'use client'
import { motion } from "framer-motion"

const Page = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Animated Div
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1 }}
            >
                Crazy Animated Div
            </motion.div>

            <motion.div
                animate={{ transform: "rotateY(360deg)" }}
                transition={{ repeat: Infinity, duration: .5, ease: "linear" }}
            >
                Infinite Spinning Div
            </motion.div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                style={{ display: 'inline-block' }}
            >
                Rotating Around Itself
            </motion.div>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
                Spring Animation Div
            </motion.div>
        </>
    )
}

export default Page