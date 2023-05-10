import { useTranslation } from "react-i18next";

type ProjectProps = {
    nom : string,
    description : string,
    tags : any,
    image : any,
    lien : string
}

export const ProjectCard =  ( props : ProjectProps ) => {

    const { t } = useTranslation();

    return (
            <div className="rounded-[18px] my-4 min-w-[16rem] w-full max-w-[24rem] justify-center align-middle hover:scale-105 transition" >
                <a href={props.lien} target="_blank">
                    <div className="relative max-h-[18rem] ">
                        <img src={props.image} className="w-full h-[18rem]  rounded-t-xl   object-cover" alt="Gabriel Lafrance Project" loading='lazy'/>
                    </div>
                    <div className="bg-white w-auto  text-primary-60 rounded-b-2xl p-8">
                        <h3 className=" my-2 TextLg">{t(props.nom)}</h3>
                        <div className="w-[90%]  h-[2px]  rounded-full  bg-primary-60 m-auto"/>
                        <p className="TextSmall m-2">{t(props.description)}</p>
                        <div className="mt-4 flex flex-row  mx-auto px-4 justify-around">
                            {props.tags.map((tag: any) => (
                                <span className={`TextXlSmall mx-2 ${tag.couleur}`}>
                                #{tag.name} 
                                </span>
                            ))}  
                        </div>
                    </div>
                </a>
            </div>
    );
  };