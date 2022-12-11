import React from 'react'
import style from './Contact.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { useOutletContext } from 'react-router-dom';

function Contact() { 
  const [theme] = useOutletContext();
  return (
    <div className={style.container}>
      <div className={style.mailId}>
      <AiOutlineMail className={style.mailIcon}  style={{color: theme=="light" ? "black" : "white", fontWeight:"600"}}/>  <span style={{color: theme=="light" ? "black" : "white", fontWeight:"600"}}>yashwanthsrinivaswebdev@gmail.com</span>
      </div>
    </div>
  )
}

export default Contact