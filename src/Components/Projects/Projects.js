import React from 'react'
import style from './Projects.module.css'
import veganFoodBackgroundImage from '../../Images/engin-akyurt-GnkZMT5rtx4-unsplash.jpg'
import footballStatsBackgroundImage from '../../Images/sari-ibrahim-lk0T8KLxfqs-unsplash.jpg'
import veganActivismSimulatorBackgroundImage from '../../Images/claudio-schwarz-FoVrVBxEefU-unsplash.jpg'
import todoBackgroundImage from '../../Images/todo.png'
import {useOutletContext, Link, useNavigate} from 'react-router-dom'


function Projects() {
  const [theme] = useOutletContext();
  const navigate = useNavigate();
  return (
    <div className={style.container}>

    
    

<div  className={style.projectContainer} 
style={{ boxShadow: theme=="light"? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)" : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)" }}   >
  
    <a  href="https://football-stats-d45ae.web.app/" 
    className={style.hrefContainer} style={{backgroundColor: theme=="light" ? 'rgba(165, 42, 42, 0.5)' : 'rgba(51, 153, 255,0.4)' }} 
    target="_blank"
    > 
     
     <img src={footballStatsBackgroundImage} className={style.projectThumbnail} />
     <div className={style.projectDetailsContainer} >
      <span  className={style.title}>Football stats</span>
      <span className={style.description}>A place to get all the stats you want to know about any team and player.</span>
    </div>
    </a>
    </div>
   



    <div     className={style.projectContainer}
    style={{ boxShadow: theme=="light"? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)" : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)" }}  >

    <a href="https://vegan-food-recipe.web.app/" className={style.hrefContainer} 
    target="_blank"
    style={{backgroundColor: theme=="light" ? 'rgba(165, 42, 42, 0.5)' : 'rgba(51, 153, 255,0.4)'  }}   >  
       
    <img src={veganFoodBackgroundImage} className={style.projectThumbnail} />
     

    <div className={style.projectDetailsContainer}  >
      <span className={style.title}>Vegan meal helper</span>
      <span className={style.description}>A nice little meal suggester to help you cook delicious vegan food using the ingredients you have.</span>
    </div>
    </a>
    </div>





    <div   className={style.projectContainer} 
    style={{ boxShadow: theme=="light"? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)" : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)" }}  >

    <a href="https://vegan-activism-simulator.web.app/" className={style.hrefContainer}  
    target="_blank"
    style={{backgroundColor: theme=="light" ? 'rgba(165, 42, 42, 0.5)' : 'rgba(51, 153, 255,0.4)'  }}   >
  
    <img src={veganActivismSimulatorBackgroundImage} className={style.projectThumbnail} />

      <div className={style.projectDetailsContainer} >
      <span className={style.title}>Vegan activism simulator</span>
      <span className={style.description} >A mini-game that will test your activism skills! </span>
    </div>
    </a>
    </div>





    <div   className={style.projectContainer} style={{ boxShadow: theme=="light"? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)" : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)" }}   >
    <a href="https://todo-3476e.web.app/" className={style.hrefContainer}  
    target="_blank"
    style={{backgroundColor: theme=="light" ? 'rgba(165, 42, 42, 0.5)' : 'rgba(51, 153, 255,0.4)'  }}   >
  
    <img src={todoBackgroundImage} className={style.projectThumbnail} />

      <div className={style.projectDetailsContainer} >
      <span className={style.title}>Todo app</span>
      <span className={style.description}>A simple app that helps to manage your todos!</span>
    </div>
    </a>
    </div>
    
    


    </div>
  )
}

export default Projects