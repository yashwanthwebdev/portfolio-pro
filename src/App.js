 import style from './App.module.css'
import {Link, Outlet} from 'react-router-dom'
import {useState, useEffect } from 'react'

function App() {

  const [backgroundColor, setBackgroundColor] = useState("rgba(123, 32, 146, 0.8)");
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("rgba(250, 0, 0, 0.6)")
  // const [navBarColor, setNavBarColor] = useState("rgba(184, 250, 2, 0.87)")
  const [navBarColor, setNavBarColor] = useState("rgba(89, 1, 89, 0.87)")
  const [theme, setTheme] = useState("light");
  
  useEffect ( ()=> {
    console.log('new theme is ', backgroundColor);
  },[backgroundColor])

  return (
    <div className={style.container} style={{backgroundColor:`${backgroundColor}` }}>
       
       <div className={style.navBar} style={{backgroundColor:`${navBarBackgroundColor}`, marginBottom:"5ch" }} > 
       
       <Link to="/home" style={{color:`${navBarColor}`}}  >Home</Link>
       <Link to="/projects" style={{color:`${navBarColor}`}} >Projects </Link>
       <Link to="/contact" style={{color:`${navBarColor}`}}>Contact </Link>

       <div className={style.themeContainer}>
       <button onClick={() => { setTheme("light"); setBackgroundColor("rgba(123, 32, 146, 0.8)"); setNavBarBackgroundColor("rgba(250, 0, 0, 0.6)");  setNavBarColor("rgba(89, 1, 89, 0.87)")}} 
        className={style.buttonLight}>light</button>


       <button onClick={() => {setTheme("dark"); setBackgroundColor("rgba(12, 12, 12, 1)"); setNavBarBackgroundColor("rgba(4, 160, 250, 0.6)"); setNavBarColor("rgba(255, 255, 255,0.87)")}}
       className={style.buttonDark} >dark</button>
       </div>

       </div>

       <Outlet context={[theme]} />
      
    </div>
  );
}

export default App;
