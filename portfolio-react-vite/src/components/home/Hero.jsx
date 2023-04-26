import "../../css/Hero.css";
import {HiMoon} from "react-icons/hi";
import { Socials1 } from "../elements/Socials1"
import { useContext, useEffect, useState } from "react"
import AnimContext from "../../context/AnimationContext";
import { HOME } from "../../data/Pages";
function Hero(){
    const  {moonLoading, setMoonLoading,showGreet, setShowGreet, showPro, setShowPro, showDescr, setShowDescr, showBtn, setShowBtn} = useContext(AnimContext)
    useEffect(()=>{
            setTimeout(()=>{
                setMoonLoading(false)
            }, 1500)
            setTimeout(()=>{
                setShowGreet(true)
            }, 1700)
            setTimeout(()=>{
                setShowPro(true)
            }, 1900)
            setTimeout(()=>{
                setShowDescr(true)
            }, 2100)
            setTimeout(()=>{
                setShowBtn(true)
            }, 2300)
    }, [])
    const [hero, setHero] = useState({});
    useEffect(()=>{
        const API_URL = 'api/home/'
        fetch(API_URL).then((response)=> response.json()).then((result)=>{
            if(result.success){
                setHero(result.homeData)
            } else {
                setHero(HOME)
            }
        }).catch((err)=>{
            console.log(err)
            setHero(HOME)
        })
    }, [])
    return(
        <div className="LOGO-PARENT">
            <div className="LOGO">
                <p className={showGreet ? "greet-1 OPACITY show" : "greet-1 OPACITY"}>
                    <span>{hero.desig_clr}</span> {hero.desig} </p>
                <h1 className={moonLoading ? "logo-heading animate": "logo-heading"}>
                    <HiMoon/>
                    <span>{hero.name}</span><span>{hero.name_clr}</span>
                </h1>
                <h2 className={showPro ? "profession TRANSLATE-Y show": "profession TRANSLATE-Y"}>
                    {hero.profession}
                </h2>
                <p className={showDescr ? "portfolio-descr TRANSLATE-Y show": "portfolio-descr TRANSLATE-Y"}>
                    {hero.portfolio}
                </p>
            </div>
            <div className={showBtn ? "OPACITY show" : "OPACITY"}>
                <Socials1 /> 
            </div>
            <a href="#MYWORKS" className={showBtn ? "Button OPACITY show" : "Button OPACITY"}> 
                <div className="before"></div> See My Works {">>>"}
            </a>
        </div>
    )
}
export {Hero}