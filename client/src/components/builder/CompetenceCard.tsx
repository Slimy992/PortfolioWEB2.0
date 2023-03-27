import { Rating } from "./Rating"

type CardProps = {
  competence: string,
  rating: number
}


export const CompetenceCard = ({ competence, rating }: CardProps) => {
  return (
    <div className="bg-slate-200 py-[0.5vh] px-[1vw] rounded-xl text-center text-black mb-4 pb-2">
      <span className="block">{competence} : </span>
      <Rating rating={rating}/>
    </div>
     )
}
