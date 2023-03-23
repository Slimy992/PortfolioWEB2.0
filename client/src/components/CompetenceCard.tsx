type CardProps = {
  competence: string,
  rating: string
}

export const CompetenceCard = ({ competence, rating }: CardProps) => {
  let texte : string = competence + " : " + rating ;
  return (
    <span className=" bg-slate-200 p-2 rounded-xl text-center text-black mb-4">{texte}</span>
  )
}
