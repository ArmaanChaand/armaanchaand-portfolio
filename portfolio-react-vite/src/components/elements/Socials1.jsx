import "../../css/Socials1.css";
import { useEffect, useState } from "react";
import { SOCIAL_MEDIAS } from "../../data/Socials";

function Socials1(){
    const [socials, setSocials] = useState([]);
    const social_elements = socials.map((social)=>{
        return( 
        <li key={social.link}>
            <a 
                href={social.link} 
                target={social.inNewTab ? "_blank" : "_parent"} 
                title={social.link}
                dangerouslySetInnerHTML={{__html: social.icon}}
            >
                {/* {social.icon} */}
            </a>
        </li>
        )
    })
    useEffect(()=>{
        const API_URL = 'api/allsocials/';
        fetch(API_URL).then((response)=> response.json()).then((result)=>{
            if(result.success){
                setSocials(result.socials)
            } else{
                setSocials(SOCIAL_MEDIAS)
            }
        }).catch((err)=>{
            console.log(err)
            setSocials(SOCIAL_MEDIAS)
        })
    }, [])
    return(
        <div className="SOCIAL S1">
            <ul>
                {social_elements}
            </ul>
        </div>
    )
}
export {Socials1}