import { Soustitre } from "../builder/SousTitreSection";


const Propos = () =>{
    
    
    return (
    <section className="mt-32 h-1/2 flex flex-col align-midle justify-center content-center ">
        <div className="w-3/4 h-fit min-w-[300px] monGivrer rounded-2xl text-slate-200 self-center text-center BorderBlanc">
            <div className="m-4 flex flex-col"> 
                <Soustitre soustitre="À Propos de moi"/>
                <p className="ProposTexte">
                    Salut! Je m'appelle Gabriel Lafrance et je suis un jeune développeur. 
                    Je suis présentement étudiant finissant au Cégep de Rimouski en technique de l'informatique.
                    Durant mes années d'étude, j'ai appris plusieur notion de développement comme la programmation orienté object, 
                    les structures de données. De plus, j'ai aussi appris comment développer de manière proffessionelle avec l'approche AGILE ainsi que SOLIDE
                </p>
                <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-slate-200 m-auto"/>
                <p className="ProposTexte">
                    Je n'ai aucune expérience concrète en informatique en entreprise. 
                    Cela n'empêche pas que depuis mon plus jeune âge, je suis en contact constant avec l'informatique. 
                    Déjà très jeune, je m'intéressais au fonctionnement des jeux vidéo que je possédais. 
                    Lorsque j'ai débuté mes études en informatique, j'ai commencé à vouloir en apprendre de plus en plus. 
                    De ce fait, j'ai commencé créer des projets comme créer des mods pour les jeux aux quelle je jouais ainsi que des serveurs pour moi et mes amis,                     mais aussi des sites Web divers et variés allant d'un simple site statique à une boutique complète en ligne. 
                    Depuis récemment, j'ai commencé à trouver un certain plaisir à développer des petits logiciels.   
                </p>
                <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-slate-200 m-auto"/>
                <p className="ProposTexte">
                    Petit à petit, plus les petits projets avançaient plus je les trouvais obsolètes. 
                    J'ai donc décidé de réunir toutes mes compétences et de faire trois projets plus à l'image de ce que j'étais capable de faire.                                     
                </p>
            </div>
        </div>
    </section>
    );
}

export default Propos;