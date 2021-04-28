import React, { useState } from "react";
import styles from "../../styles/Auth/Loginform.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/thunks";

const Loginform = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ name, password }));
  };

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h1>Login</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          type='text'
          placeholder='Name'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          type='text'
          placeholder='Password'
        />
        <button type='submit' className={styles.submit_btn}>
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Loginform;
