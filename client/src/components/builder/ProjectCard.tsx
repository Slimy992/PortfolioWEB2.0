import github from "../../assets/logo/github.png"

type ProjectProps = {
    nom : string,
    description : string,
    tags : any,
    image : any,
    lien : string
}

export const ProjectCard =  ({nom, description, tags, image, lien } : ProjectProps ) => {
    return (
            <div className="rounded-[18px] w-full xl:max-w-[33%] justify-center align-middle bg-white BorderNoir hover:scale-105 transition" >
                <a href={lien} target="_blank">
                    <div className="relative max-h-[18rem] ">
                        <img src={image} className="w-full h-[18rem]  rounded-t-xl   object-cover" alt="Gabriel Lafrance Project"/>
                    </div>
                    <div className="bg-white w-auto h-fit text-zinc-900 rounded-2xl">
                        <h1 className="GrosseurTitre my-2">{nom}</h1>
                        <div className="w-[90%]  h-[2px]  rounded-full  bg-zinc-900 m-auto"/>
                        <p className="GrosseurTexteNormal m-2">{description}</p>
                        <div className="m-2 flex flex-row flex-wrap px-4 justify-start">
                            {tags.map((tag: any) => (
                                <span className={`GrosseurTextePetit mr-6 ${tag.couleur}`}>
                                #{tag.name} 
                                </span>
                            ))}  
                        </div>
                    </div>
                </a>
            </div>
    );
  };