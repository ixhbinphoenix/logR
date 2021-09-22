import React from "react";
import { motion } from "framer-motion";
import "./index.scss";

interface IProps {
  children: JSX.Element,
  onClick: () => void
}

export default function Backdrop(props: IProps) {
  return (
    <motion.div
      className="backdrop"
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  )
}