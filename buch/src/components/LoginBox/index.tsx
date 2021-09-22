import React, { useState } from "react";
import Modal from "../Modal";
import "./index.scss";

interface IProps {
    handleConfirm: (username: string, password: string) => void;
    handleCancel: () => void;
}

export default function LoginBox(props: IProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const confirm = () => {
        props.handleConfirm(username, password);
    }
    return (
        <Modal handleClose={props.handleCancel} title="Login">
            <div className="loginbox">
                <p className="modal-input-label">Username:</p>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
                    type="text"
                    id="loginbox-username-input"
                    className="modal-text-input">
                </input>
                <p>Password:</p>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                    type="password"
                    id="loginbox-password-input"
                    className="modal-text-input">
                </input>
                <button onClick={confirm} className="loginbox-button">Confirm</button>
                <button onClick={props.handleCancel} className="loginbox-button">Cancel</button>
            </div>
        </Modal>
    )
}