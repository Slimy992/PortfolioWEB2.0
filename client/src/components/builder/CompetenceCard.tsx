import { Rating } from "./Rating"

type CompetenceProps = {
  nom: string,
  rating: number,
  experience: string,
}

export const CompetenceCard = ( props : CompetenceProps ) => {
  return (
    <div className=" bg-secondary-30  m-6 p-4 rounded-xl text-center text-primary-60   shadow-2xl shadow-black TextLg hover:scale-105 transition">
      <span className="inline-block">{props.nom} : <Rating rating={props.rating}/></span>
      <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-primary-60 m-auto"/>
      <div className="flex flex-col justify-center mt-4">
          <span>Expérience : </span>
          <span>{props.experience}</span>
      </div>
      
    </div>
     )
}
