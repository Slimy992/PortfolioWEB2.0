import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Soustitre } from "../builder/SousTitreSection";



const Propos = () =>{
    
    
    return (
    <section className="mt-32 h-fit flex flex-col align-midle justify-center content-center ">
        <div className="w-3/4 h-fit min-w-[300px] monGivrer p-8 rounded-2xl text-secondary-30 self-center text-center shadow-2xl shadow-black">
            <div className="m-4 flex flex-col"> 
                <Soustitre soustitre="À Propos de moi"/>
                <Accordion.Root  type="multiple"  className='text-secondary-30   w-full mx-auto rounded-xl my-8 p-8 '>
                    <Accordion.Item value="item-1" className=' w-full  mx-auto'>
                        <Accordion.Header  className="">
                            <Accordion.Trigger className='mx-auto group w-full flex flex-row  justify-between '>
                                <span className='TextLg  my-auto'>Mon Parcours Scolaire</span>
                                <ChevronDownIcon  className=" transition-transform duration-300 group-data-[state=open]:rotate-180 text-action-10 w-16 h-16"/>
                            </Accordion.Trigger>
                            <div className="mt-2 mb-2 h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp fit overflow-hidden">
                                <div className="h-fit TextBasePlus my-2">
                                    <p>
                                    J'ai pour objectif d'obtenir un poste de développeur web au sein d'une entreprise dynamique et innovante où je peux
                                    utiliser mes compétences et ma créativité pour contribuer à la croissance de l'organisation tout en
                                    développant mes compétences et mon expertise en tant que développeur web.
                                    </p>
                                </div>
                                <div className="mt-4  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-2" className='w-full  mx-auto'>
                        <Accordion.Header  className="">
                            <Accordion.Trigger className='mx-auto group w-full flex flex-row  justify-between '>
                                <span className='TextLg  my-auto'>Mes Objectifs</span>
                                <ChevronDownIcon  className="transition-transform duration-300 group-data-[state=open]:rotate-180 text-action-10 w-16 h-16"/>
                            </Accordion.Trigger>
                            <div className="mt-2 mb-2  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-fit overflow-hidden">
                                <div className="h-fit TextBasePlus my-2">
                                    <p>
                                    J'ai pour objectif d'obtenir un poste de développeur web au sein d'une entreprise dynamique et innovante où je peux
                                    utiliser mes compétences et ma créativité pour contribuer à la croissance de l'organisation tout en
                                    développant mes compétences et mon expertise en tant que développeur web.
                                    </p>
                                </div>
                                <div className="mt-4  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-3" className=' w-full mx-auto'>
                        <Accordion.Header  className="">
                            <Accordion.Trigger className='mx-auto group w-full flex flex-row  justify-between '>
                                <span className='TextLg  my-auto'>Mes Expériences</span>
                                <ChevronDownIcon  className="transition-transform duration-300 group-data-[state=open]:rotate-180 text-action-10 w-16 h-16"/>
                            </Accordion.Trigger>
                            <div className="mt-2 mb-2  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-fit overflow-hidden">
                                <div className="h-fit TextBasePlus my-2">
                                    <p>
                                    J'ai principalement de l'expérience en développement web. Depuis trois ans et demi, 
                                    je me forme continuellement pour devenir le meilleur développeur web possible.
                                    Je suis compétent en HTML, CSS, JavaScript et TypeScript. J’ai complété plusieurs projets personnels,
                                    notamment ce portolio web responsive et une application web utilisant MySQL, Express, React et Node.js.
                                    En plus de tout cela, j'ai deux ans d'expérience avec C++ et maintenant j'apprend C# sur le côté.
                                    </p>
                                </div>
                                <div className="mt-4 h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </div>
    </section>
    );
}

export default Propos;