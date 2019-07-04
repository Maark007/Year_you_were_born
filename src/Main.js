import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Styles/index.css';

export default function Main(props) {
  const [idade, setIdade] = useState('');

  const dispatch = useDispatch();

  function handleSend(e) {
    if (e.keyCode !== 13) return;
    if (!idade) return toast.warn("Por favor digite sua idade!")

    const data = new Date();
    const year = data.getFullYear();

    const yourAge = `Voce nasceu em ${year - idade}`;

    dispatch({ type: 'ADD_AGE', payload: toast.success(yourAge) });

    setIdade('');
  };

  function submitAge() {
    const data = new Date();
    const year = data.getFullYear();

    if (!idade) return toast.warn("Por favor digite sua idade!");

    const yourAge = `Voce nasceu em ${year - idade}`;

    dispatch({ type: 'ADD_AGE', payload: toast.success(yourAge) })

    setIdade('');
  };
  return (
    <div className="container">
      <input
        className="container-input"
        type="text"
        value={idade}
        onChange={(e) => setIdade(e.target.value.replace(/[^0-9]/, ""))}
        placeholder="Digite sua idade"
        onKeyDown={handleSend}
      />
      <button className="container-button" onClick={submitAge}>Send</button>
      <ToastContainer />
    </div>
  );
}
