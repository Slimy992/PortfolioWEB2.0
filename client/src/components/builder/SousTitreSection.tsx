
type Props = {
  soustitre: string,
}


export const Soustitre = ({soustitre}: Props) => {
  return (
    <>
        <span className="mb-2 GrosseurTitre">{soustitre}</span>
        <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-slate-200 m-auto"/>
    </>
     )
}