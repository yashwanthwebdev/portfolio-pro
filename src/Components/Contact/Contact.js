import React from 'react'
import style from './Contact.module.css'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() { 
  return (
    <div className={style.container}>

      <div className={style.mailId}>
      <AiOutlineMail className={style.mailIcon} />  <span>yashwanthsrinivaswebdev@gmail.com</span>
      </div>

    </div>
  )
}

export default Contact