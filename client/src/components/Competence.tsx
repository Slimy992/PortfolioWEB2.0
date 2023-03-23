import { CompetenceCard } from "./CompetenceCard";

function Competence(){

    return (
        <div className="mr-16 my-24 w-full  h-1/2 flex flex-col md:flex-row  flex-nowrap align-midle justify-center content-center">
            <div className=" w-1/2 h-fit monGivrer  rounded-2xl text-slate-200 self-center text-center">
                <div className="m-4 flex flex-col">
                    <span className="mb-4 GrosseurTitre">Mes Compétences</span>
                    <div className="mt-4 mb-8 w-[90%] h-2  rounded-full  bg-slate-200 m-auto shadow-2xl drop-shadow-2xl"/>
                    <div className="grid Grid2x1 gap-x-[10%] GrosseurTexteNormal">
                        <div className=" flex flex-col flex-wrap align-middle justify-center content-center">
                            <CompetenceCard competence="JavaScript" rating="⭐⭐⭐⭐⭐"/>
                            <CompetenceCard competence="JavaScript" rating="⭐⭐⭐⭐⭐"/>
                            <CompetenceCard competence="JavaScript" rating="⭐⭐⭐⭐⭐"/>
                        </div>
                        <div className=" flex flex-col flex-wrap align-middle justify-center content-center">
                            <CompetenceCard competence="JavaScript" rating="⭐⭐⭐⭐⭐"/>
                            <CompetenceCard competence="JavaScript" rating="⭐⭐⭐⭐⭐"/>
                            <CompetenceCard competence="JavaScript" rating="⭐⭐⭐⭐⭐"/>
                        </div>
                    </div>
                
                    </div>
            </div>
        </div>
    
    
    
    
    );
}

export default  Competence;
