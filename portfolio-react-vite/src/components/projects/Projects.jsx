import { useEffect, useState } from "react";
import "../../css/Projects.css";
import { ProjectItem } from "./ProjectItem";
import { PROJECTS } from "../../data/Pages";
import { PROJECT_ITEMS } from "../../data/Projects";
import { randomText } from "../../utilities/RandomTexts"; 
function Projects(){
    const [projectPage, setProjectPage] = useState({})
    useEffect(()=>{
        const API_URL = 'api/projects/'
        fetch(API_URL).then((response)=> response.json()).then((result)=>{
            if(result.success){
                setProjectPage(result.projectsData)
            } else {
                setProjectPage(PROJECTS)
            }
        }).catch((err)=>{
            console.log(err)
            setProjectPage(PROJECTS)
        })
    }, [])
    const [projectItems, setProjectItems] = useState([])
    useEffect(()=>{
        const API_URL = 'api/allprojects/'
        fetch(API_URL).then((response)=> response.json()).then((result)=>{
            if(result.success){
                setProjectItems(result.projects)
            } else {
                setProjectItems(PROJECT_ITEMS)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const projectItems_elements = projectItems.map((projectItem)=>{
        return (
            <ProjectItem 
                key={randomText()}
                name={projectItem.name}
                para={projectItem.para}
                github={projectItem.github}
                project_url={projectItem.project_url}
                skills={projectItem.skills}
            />
        )
    })
    return (
        <section id="MYWORKS" className="PROJECTS-PAGE">
            <h1 className="page-heading">{projectPage.heading}</h1>
                <div className="PROJECTS" >
                   {projectItems_elements.length ? projectItems_elements : "Nothing to Show"}
                </div>
        </section>
    )
}
export {Projects};