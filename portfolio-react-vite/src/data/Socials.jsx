import {FaGithubSquare, FaLinkedin, FaInstagramSquare, } from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {MdEmail} from "react-icons/md";
const SOCIAL_MEDIAS = [
    {
    icon: <FaGithubSquare/>,
    link: "https://github.com/ArmaanChaand",
    inNewTab: true,
},
{
    icon: <FaLinkedin/>,
    link: "https://www.linkedin.com/in/armaanchaand/",
    inNewTab: true,
},
{
    icon: <FaInstagramSquare/>,
    link: "https://instagram.com/armaan_chaand",
    inNewTab: true,
},
{
    icon: <SiGmail/>,
    link: "mailto:armaan.chaand17@gmail.com",
    inNewTab: false,
    },
]
export {SOCIAL_MEDIAS}