
type Props = {
  soustitre: string,
}


export const Soustitre = ({soustitre}: Props) => {
  return (
    <>
        <h2 className="mb-2 TextXlPlus  font-medium">{soustitre}</h2>
        <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-secondary-30 m-auto"/>
    </>
     )
}