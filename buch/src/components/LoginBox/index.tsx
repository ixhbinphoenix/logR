import React, { useState } from "react";
import { sha256 } from "hash.js";
import Modal from "../Modal";
import "./index.scss";
import ModalError from "../ModalError";

interface IProps {
    handleConfirm: (username: string, password: string) => void;
    handleCancel: () => void;
}

export default function LoginBox(props: IProps) {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState("");

    const confirm = () => {
        if (username == "") {
            setError("You have to provide a username!");
        } else if (pass == "") {
            setError("You have to provide a password!");
        } else {
            props.handleConfirm(username, sha256().update(pass).digest('hex').toString());
        }
    }
    return (
        <Modal handleClose={props.handleCancel} title="Login">
            <div className="loginbox">
                {(error !== "") &&
                    <ModalError error={error} handleClose={() => { setError("") }}></ModalError>
                }
                <p className="modal-input-label">Username:</p>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
                    type="text"
                    id="loginbox-username-input"
                    className="modal-text-input">
                </input>
                <p>Password:</p>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPass(e.target.value) }}
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