import { Rating } from "./Rating"

type CardProps = {
  competence: string,
  rating: number
}


export const CompetenceCard = ({ competence, rating }: CardProps) => {
  return (
    <div className="bg-slate-200  py-[0.3vh] px-[0.7vw] rounded-xl text-center text-black  mx-6 my-1 BorderProject">
      <span className="inline-block">{competence} : <Rating rating={rating}/></span>
    </div>
     )
}
