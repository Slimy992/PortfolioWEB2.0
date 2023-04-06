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
        <div className="rounded-[18px] w-full xl:max-w-[33%] justify-center align-middle bg-white BorderNoirThicc">
            <div className="relative max-h-[18rem]">
                <img src={image} className="w-full h-[18rem]  rounded-t-xl   object-cover"/>
                <div className="absolute inset-0 flex justify-end m-1">
                    <div className="xs:w-20 xs:h-24 h-16 w-16 rounded-full flex justify-center items-center cursor-pointer">
                        <a href={lien} target="_blank">
                            <img src={github} className="min-w-[4rem] min-h-[4rem] w-[14%] h-[14%] object-contain hover:scale-125  transition"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white w-auto h-fit text-zinc-900 rounded-2xl">
                <h1 className="GrosseurTitre my-2">{nom}</h1>
                <div className="w-[90%]  h-[2px]  rounded-full  bg-zinc-900 m-auto"/>
                <p className="GrosseurTexteNormal m-2">{description}</p>
                <div className="m-2 flex flex-row flex-wrap  justify-start">
                    {tags.map((tag: any) => (
                        <span className={`GrosseurTextePetit mr-6 ${tag.couleur}`}>
                        #{tag.name} 
                        </span>
                    ))}  
                </div>
            </div>
        </div>
    );
  };