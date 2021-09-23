import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import '../style/Home.scss';
import Modal from '../components/Modal';
import LoginBox from '../components/LoginBox'

export default function Home() {
  const [loginBoxOpen, setLoginBoxOpen] = useState(false);

  const close = () => setLoginBoxOpen(false);
  const open = () => setLoginBoxOpen(true);

  const confirm = (username: string, password: string) =>{
    console.log("Login: " + username + " " + password);
    close();
  }

  const register = (username: string, password: string) =>{
    console.log("Register: " + username + " " + password);
    close();
  }

  // useEffect with an empty array as the 2nd Argument works like componentDidMount
  useEffect(() => {
    document.title = "logR"
  }, []);

  return (
    <div>
      <div id="header">
        <img src="/src/assets/logR-light.svg"></img>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="modal-button"
          onClick={() => (loginBoxOpen ? close() : open())}
        >
          Open Login
        </motion.button>
      </div>
      {loginBoxOpen && <LoginBox handleRegister={register} handleCancel={close} handleConfirm={confirm}></LoginBox>}
    </div>
  )
}