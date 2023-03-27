
type Props = {
  soustitre: string,
}


export const Soustitre = ({soustitre}: Props) => {
  return (
    <>
        <span className="mb-4 GrosseurTitre">{soustitre}</span>
        <div className="mt-4 mb-8 w-full h-2  rounded-full  bg-slate-200 m-auto"/>
    </>
     )
}