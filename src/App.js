import { motion } from "framer-motion";
import { MdBattery60, MdMemory } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="absolute w-full h-full bg-neutral-900">
      <motion.div
        initial={{ opacity: 0, x: 100, y: -150, scale: 1 }}
        animate={{
          opacity: 1,
          x: -150,
          y: -150,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        }}
        whileTap={{
          scale: 0.95,
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        }}
        className="group hover:bg-neutral-600 transition-colors duration-300 hover:bg-opacity-60 absolute left-1/2 top-[40%] bg-neutral-800 bg-opacity-70 -translate-x-1/2 -translate-y-1/2 w-80 h-[30rem] rounded-2xl"
      >
        <motion.div
          className="text-white bold Mukta text-3xl ml-8 mt-6"
          initial={{ opacity: 0, x: 200, scale: 1 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
              // delay: 0.6,
            },
          }}
        >
          PRO X SUPERLIGHT
        </motion.div>
        <motion.div
          className="text-neutral-400 bold Mukta text-lg ml-8 mt-4 flex"
          initial={{ opacity: 0, x: 200, scale: 1 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
              // delay: 0.8,
            },
          }}
        >
          60<strong className="font-sans">%</strong>
          <MdBattery60 size={20} className="text-white self-center mx-2" />
        </motion.div>
        <div className="flex justify-center h-[270px]">
          <motion.img
            initial={{ opacity: 0, x: 200, scale: 1 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
                // delay: 1,
              },
            }}
            alt="Pro X Superlight"
            src="https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/h/i/high_resolution_png-pro_x_superlight_wireless_gaming_mouse_fob_white.png"
          />
        </div>
        <div className="justify-start w-full flex flex-row-reverse pr-5 h-24 ">
          <div className="transition-all duration-300 flex hover:bg-neutral-300 hover:bg-opacity-30 h-12 mx-1.5 w-12 border-opacity-50 border-gray-300 border cursor-pointer rounded-lg self-center">
            <FiSettings size={26} className="text-white self-center m-auto" />
          </div>
          <div className="transition-all duration-300 text-center flex hover:bg-neutral-300 hover:bg-opacity-30 h-12 mx-1.5 w-12 border-opacity-50 border-gray-300 border cursor-pointer self-center rounded-lg">
            <MdMemory size={32} className="text-white m-auto self-center" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
