import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import '../style/Home.scss';
import Modal from '../components/Modal';
import LoginBox from '../components/LoginBox'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const confirm = (username: string, password: string) =>{
    console.log(username + password);
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
          onClick={() => (modalOpen ? close() : open())}
        >
          Launch modal
        </motion.button>
      </div>
      {modalOpen && <LoginBox handleCancel={close} handleConfirm={confirm}></LoginBox>}
    </div>
  )
}