import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

function Motion() {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState(0);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [visible]);

  return (
    <motion.main
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      className="bg-[url('https://dashboardsdesign.com/img/dashboards/dashboard-05-custom.png')] bg-cover overflow-x-hidden"
      // https://uploads-ssl.webflow.com/5db1c0d5ca3871e8fd1a7b66/5f63b113e7d1c6c38762d22e_0*SIFdzjYX5-zSqfgx.png
      // https://dashboardsdesign.com/img/dashboards/dashboard-05-custom.png
    >
      <div className="w-full h-full flex justify-center">
        <div className="self-center flex gap-5 bg-black bg-opacity-20 backdrop-blur-sm shadow-md rounded-lg pt-12 pl-16">
          <div>
            <button
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                boxShadow:
                  " inset 3px 3px 8px #c4c4c4, inset -3px -3px 8px #ffffff",
              }}
              className="pop text-neutral-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 transition-shadow"
              onClick={() => {
                setVisible(!visible);
                setOptions(1);
              }}
            >
              blue
            </button>
          </div>
          <div>
            <button
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                boxShadow:
                  " inset 3px 3px 8px #c4c4c4, inset -3px -3px 8px #ffffff",
              }}
              className="pop text-neutral-600  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 transition-shadow"
              onClick={() => {
                setVisible(!visible);
                setOptions(2);
              }}
            >
              red
            </button>
          </div>
          <div>
            <button
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                boxShadow:
                  " inset 3px 3px 8px #c4c4c4, inset -3px -3px 8px #ffffff",
              }}
              className="pop text-neutral-600  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 transition-shadow"
              onClick={() => {
                setVisible(!visible);
                setOptions(3);
              }}
            >
              green
            </button>
          </div>
          <div>
            <button
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                boxShadow:
                  " inset 3px 3px 8px #c4c4c4, inset -3px -3px 8px #ffffff",
              }}
              className="pop text-neutral-600  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 transition-shadow"
              onClick={() => {
                setVisible(!visible);
                setOptions(4);
              }}
            >
              yelo
            </button>
          </div>
        </div>
      </div>
      {/* <motion.div
      drag
      initial={{ opacity: 0, x: 200 }}
      animate={visible ? "visible" : "hidden"}
      whileTap={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)" }}
      className={
          "absolute top-5 right-5 w-72 h-24 flex flex-col justify-center bg-red-500 rounded-lg shadow-md shadow-neutral-600 px-5 transition-shadow duration-500 ease-in-out pop"
        }
        variants={{
          visible: { opacity: 1, x: [300, -50, 0] },
          hidden: { opacity: 0, x: 300, y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            setVisible(false);
          }}
        >
          <ImCross size={15} className="text-white" />
        </button>
        <div>
          <p className="text-white text-xl font-bold">Title</p>
        </div>
        <div>
          <p className="text-white">Descripcion</p>
        </div>
      </motion.div> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? "visible" : "hidden"}
        // whileTap={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)" }}
        className={"px-5 pop"}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          width: "18rem",
          height: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "10px",
          background: "linear-gradient(315deg, #e5e5e5, #e5e5e5)",
          boxShadow: "-5px -5px 10px #c5c5c5 , 5px 5px 10px #ffffff",
        }}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            setVisible(false);
          }}
        >
          <ImCross size={12} className="text-neutral-500" />
        </button>
        <div>
          <p className="text-neutral-500 text-xl font-bold">Title</p>
        </div>
        <div>
          <p className="text-neutral-500">Description</p>
        </div>
      </motion.div> */}

      <motion.div
        drag
        draggable
        initial={{ opacity: 0, x: 200 }}
        animate={visible ? "visible" : "hidden"}
        // whileTap={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)" }}
        variants={{
          visible: { opacity: 1, x: [300, -50, 0] },
          hidden: { opacity: 0, x: 300, y: 0 },
        }}
        className={
          "px-5 pop bg-opacity-20 backdrop-blur-[2px] shadow-md rounded-lg text-neutral-800 border-l-2 "
        }
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          width: "18rem",
          height: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderColor:
            options === 1
              ? "rgb(14, 165, 233)" //blue
              : options === 2
              ? "rgb(239, 68, 68)" //red
              : options === 3
              ? "rgb(34, 197, 94)" //green
              : options === 4
              ? "rgb(234, 179, 8)" //yellow
              : "transparent",
          backgroundColor:
            options === 1
              ? "rgba(14, 165, 233, 0.1)" //blue
              : options === 2
              ? "rgb(239, 68, 68, 0.1)" //red
              : options === 3
              ? "rgb(34, 197, 94, 0.1)" //green
              : options === 4
              ? "rgb(234, 179, 8, 0.1)" //yellow
              : "transparent",
        }}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            setVisible(false);
          }}
        >
          <ImCross
            size={12}
            style={{
              color:
                options === 1
                  ? "rgb(14, 165, 233)" //blue
                  : options === 2
                  ? "rgb(239, 68, 68)" //red
                  : options === 3
                  ? "rgb(34, 197, 94)" //green
                  : options === 4
                  ? "rgb(234, 179, 8)" //yellow
                  : "transparent",
            }}
          />
        </button>
        <div>
          <p
            className=" text-xl font-bold "
          >
            Title
          </p>
        </div>
        <div>
          <p>Description</p>
        </div>
      </motion.div>
    </motion.main>
  );
}

export default Motion;
