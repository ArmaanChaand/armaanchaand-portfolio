import './App.css';
import {  useState, useEffect } from 'react';
import { Home } from "./components/home/Home";
import { Projects } from './components/projects/Projects';
import { Section1 } from './components/sections/Section1';
import { Contact } from './components/contact/Contact';
import { ABOUT, SKILLS  } from './data/Pages';
function App() {
  const [skillsPage, setSkillsPage] = useState({})
  const [csrf, setCsrf] = useState('')
  useEffect(()=>{
    const API_URL = 'api/getcsrf/'
    fetch(API_URL).then((response)=> response.json()).then((result)=>{
      if(result.success){
        setCsrf(result.token)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  useEffect(()=>{
    const API_URL = 'api/skills/'
    fetch(API_URL).then((response)=> response.json()).then((result)=>{
        if(result.success){
            setSkillsPage(result.skillsData)
        } else {
            setSkillsPage(SKILLS)
        }
      }).catch((err)=>{
        console.log(err)
        setSkillsPage(SKILLS)
      })
    },[])
    
  const [aboutPage, setAboutPage] = useState({})
  useEffect(()=>{
    const API_URL = 'api/about/'
    fetch(API_URL).then((response)=> response.json()).then((result)=>{
        if(result.success){
          setAboutPage(result.aboutData)
        } else {
          setAboutPage(ABOUT)
        }
      }).catch((err)=>{
        console.log(err)
        setAboutPage(ABOUT)
      })
  },[])

  return (
      <main className='MAIN'>  
          <Home />
          <Section1 
            heading={aboutPage.heading}
            sub_heading={aboutPage.sub_heading}
            paragraph={aboutPage.paragraph}
            page_class="ABOUT"
          />
          <Section1 
            heading={skillsPage.heading}
            sub_heading={skillsPage.sub_heading}
            paragraph={skillsPage.paragraph}
            page_class="SKILLS"
          />
          <Projects />
          <Contact csrf={csrf}/>
      </main>
  )
}

export default App
