import { Soustitre } from "../builder/SousTitreSection";
import { ProjectCard } from "../builder/ProjectCard";

import { projects } from "../constans/";


const Projects = () =>{
    return (
        <section id="Project" className="mt-32 h-1/2 flex flex-col align-midle justify-center content-center">
            <div className="w-3/4 h-fit min-w-[300px] monGivrer rounded-2xl text-slate-200 self-center text-center BorderBlanc">
                <div className="m-4 flex flex-col"> 
                    <Soustitre soustitre="Mes Projects"/>
                        <p className="mb-8 GrosseurTexteNormal leading-7">
                            Les projets suivants mettent en valeur mes compétences et mon expérience à travers
                            exemples concrets de mon travail. Chaque projet est brièvement décrit avec
                            le liens vers le code sur GitHub. Cela reflète mes
                            capacités à résoudre des problèmes complexes et à travailler avec différentes technologies.
                        </p>
                        <div className="mt-4 flex flex-col xl:flex-row justify-around gap-7">
                            {projects.map((project, index) => (
                            <ProjectCard nom={project.nom} description={project.description} tags={project.tags} image={project.image} lien={project.lien}/>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;