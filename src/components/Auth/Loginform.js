import React from "react";
import styles from "../../styles/Auth/Loginform.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/thunks";

const Loginform = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ login: "user@gmail.com", password: "123456" }));
  };

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h1>Login</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input className={styles.input} type='text' placeholder='Login' />
        <input className={styles.input} type='text' placeholder='Password' />
        <button type='submit' className={styles.submit_btn}>
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Loginform;
