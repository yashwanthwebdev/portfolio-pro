import React from 'react'
import style from './Home.module.css'
import {useOutletContext} from 'react-router-dom'
 
 

function Home() {
  const [theme] = useOutletContext();


  return (
    <div className={style.container} >
      
      
      {/* <h1 className={style.title}>Yashwanth's portfolio</h1> */}
    <p className={style.intro}>Hey, I am Yashwanth with 3 years experience in front-end web development. 
    
    <p>
    I am interested in projects that <span>are creative</span> and <span>are helpful in making our planet a better place for everyone. </span>
     </p>

    </p>


<div className={style.skillsMainContainer}> 

<span style={{color:"white", fontWeight:"700"}}> Skills </span>

    <div className={style.skillsContainer}>
      <span className={ theme=="light"? style.skillLight : style.skillDark} >React</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark} >Javascript</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark} >CSS</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>HTML</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>Redux</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>Mobx</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>GitHub</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>Firebase</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>Python</span>
      <span className={ theme=="light"? style.skillLight : style.skillDark}>SQL</span>
       </div>

       </div>

     




    </div>
  )
}

export default Home