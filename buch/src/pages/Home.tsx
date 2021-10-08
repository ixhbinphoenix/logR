import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import '../style/Home.scss';
import LoginBox from '../components/LoginBox'
import RegisterBox from '../components/RegisterBox';

export default function Home() {
  const [loginBoxOpen, setLoginBoxOpen] = useState(false);
  const closeLogin = () => setLoginBoxOpen(false);
  const openLogin = () => setLoginBoxOpen(true);

  const [regBoxOpen, setRegBoxOpen] = useState(false);


  const confirm = (username: string, password: string) =>{
    console.log("Login: " + username + " " + password);
    closeLogin();
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
          onClick={() => (loginBoxOpen ? closeLogin() : openLogin())}
        >
          Sign in
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="modal-button"
          onClick={() => (regBoxOpen ? setRegBoxOpen(false) : setRegBoxOpen(true))}
        >
          Register
        </motion.button>
      </div>
      {loginBoxOpen && <LoginBox handleCancel={closeLogin} handleConfirm={confirm}></LoginBox>}
      {regBoxOpen && <RegisterBox handleCancel={() => { setRegBoxOpen(false) }} handleRegister={(a,b) => {setRegBoxOpen(false)}}></RegisterBox>}
    </div>
  )
}