import { motion } from "framer-motion";
import React from "react";
import "./index.scss";

interface IProps {
    error: string;
    handleClose: () => void;
}

export default function ModalError(props: IProps) {
    return (
        <motion.div
            className="modal-error-box"
        >
            <p className="modal-error-X" onClick={props.handleClose}>
                X
            </p>
            <p className="modal-error">
                {props.error}
            </p>
        </motion.div>
    )
}