"use client"

// import { decrement, increment } from "@/redux/counterSliced";
// import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch()

  return (
    // <div className="">
    //   {count}
    //   <button onClick={() => dispatch(increment())}>
    //     +
    //   </button>
    //   <button onClick={() => dispatch(decrement())}>
    //     -
    //   </button>
    // </div>
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      Animated Div
    </motion.div>
  );
}