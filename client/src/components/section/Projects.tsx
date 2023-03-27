import { Soustitre } from "../builder/SousTitreSection";
import { ProjectCard } from "../builder/ProjectCard";

import { projects } from "../constans/";


function Projects(){
    
    
    return (
    <div className="mt-16 h-1/2 flex flex-col align-midle justify-center content-center">
        <div className="w-3/4 h-fit min-w-[300px] monGivrer rounded-2xl text-slate-200 self-center text-center">
            <div className="m-4 flex flex-col"> 
                <Soustitre soustitre="Mes Projects"/>
                    <p className="mb-8 GrosseurTexteNormal leading-7">
                        Les projets suivants mettent en valeur mes compétences et mon expérience à travers
                        exemples concrets de mon travail. Chaque projet est brièvement décrit avec
                        le liens vers le code sur GitHub. Cela reflète mes
                        capacités à résoudre des problèmes complexes et à travailler avec différentes technologies.
                    </p>
                    <div className="mt-4 grid Grid1x3  gap-7">
                        {projects.map((project, index) => (
                        <ProjectCard nom={project.nom} description={project.description} tags={project.tags} image={project.image} lien={project.lien}/>
                        ))}
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;