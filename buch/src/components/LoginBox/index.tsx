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
                <form className="loginbox-input">
                    <label className="input-label loginbox-username-input">Username:<input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}} type="text" id="loginbox-username-input" className="text-input loginbox-username-input"></input>
                    </label>
                    <br />
                    <label className="input-label loginbox-password-input">Password: <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}} type="password" id="loginbox-password-input" className="text-input password-input loginbox-password-input"></input>
                    </label>
                </form>
                <div className="loginbox-buttons">
                    <button onClick={confirm} className="loginbox-button">Confirm</button>
                    <button onClick={props.handleCancel} className="loginbox-button">Cancel</button>
                </div>
            </div>
        </Modal>
    )
}