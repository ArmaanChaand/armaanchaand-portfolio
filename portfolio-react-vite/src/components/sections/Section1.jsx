import "../../css/Section1.css";

function Section1({heading, sub_heading, paragraph, page_class}){
    
    return (
       <section className={`SKILLS-PAGE  ${page_class} `}>
            <div className="TEXTS">
                <h1 className="page-heading">
                    {heading}
                </h1>
                <h2 className="sub-heading">
                    {sub_heading}
                </h2>
                <p className="descr">
                    {paragraph}
                </p>
            </div>
       </section>
    )
}
export {Section1};