type ProjectProps = {
    nom : string,
    description : string,
    tags : any,
    image : any,
    lien : string
}

export const ProjectCard =  ( props : ProjectProps ) => {
    return (
            <div className="rounded-[18px] my-4 min-w-[16rem] w-full max-w-[32rem] justify-center align-middle bg-white BorderNoir hover:scale-105 transition" >
                <a href={props.lien} target="_blank">
                    <div className="relative max-h-[18rem] ">
                        <img src={props.image} className="w-full h-[18rem]  rounded-t-xl   object-cover" alt="Gabriel Lafrance Project"/>
                    </div>
                    <div className="bg-white w-auto h-fit  text-primary-60 rounded-2xl p-8">
                        <h3 className=" my-2 TextBase">{props.nom}</h3>
                        <div className="w-[90%]  h-[2px]  rounded-full  bg-primary-60 m-auto"/>
                        <p className="TextSmall m-2">{props.description}</p>
                        <div className="mt-16 flex flex-row flex-wrap px-4 justify-start">
                            {props.tags.map((tag: any) => (
                                <span className={`TextSmall mr-6 ${tag.couleur}`}>
                                #{tag.name} 
                                </span>
                            ))}  
                        </div>
                    </div>
                </a>
            </div>
    );
  };