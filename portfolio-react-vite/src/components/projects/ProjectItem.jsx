import "../../css/ProjectItem.css";
import {FaGithubSquare} from "react-icons/fa";

function ProjectItem({name, para, github, project_url, skills}){
    return(
        <div className={"project"}>
            <div className="project-content">
                <h3 className="name">{name}</h3>
                <p className="description">{para}</p>
                <p className="skills">{skills}</p>
                <div className="links">
                    <a href={github} target="_blank" className="github" title={`Source Code: ${github}`}>
                        <FaGithubSquare/>
                        <span className="sr-only">Github Repository</span>
                    </a>
                </div>
                <div className="footer">
                    <a 
                        href={project_url} 
                        target="_blank" 
                        title={project_url} 
                        className="EXPLORE button"
                        >
                            Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}
export {ProjectItem};