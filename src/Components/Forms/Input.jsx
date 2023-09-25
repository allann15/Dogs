import React from 'react'
import styles from './Input.module.css'
const Input = ({type, name, label, value, onChange, setValue, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input type={type} name={name} id={name} className={styles.input} onChange={onChange} value={value} onBlur={onBlur}/>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input