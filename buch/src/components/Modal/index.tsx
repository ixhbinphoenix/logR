import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

interface IProps {
  handleClose: () => void,
  title: String,
  children?: JSX.Element
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
}

export default function Modal(props: IProps) {

  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-header">
          <p>{props.title}</p>
        </div>
        {props.children}
      </motion.div>
    </Backdrop>
  )
}