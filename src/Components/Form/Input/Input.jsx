import React from 'react';
import style from './Input.module.css';

const Input = ({ value, name, label, type, handleChange, error, onBlur }) => {
  console.log(onBlur);
  return (
    <div className={style.wrapper}>
      <label className={label} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={style.input}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default Input;
