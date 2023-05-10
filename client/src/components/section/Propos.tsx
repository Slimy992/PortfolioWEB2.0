import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Soustitre } from "../builder/SousTitreSection";
import { useTranslation } from 'react-i18next';



const Propos = () =>{
    
    const { t } = useTranslation();

    return (
    <section className="mt-32 h-fit flex flex-col align-midle justify-center content-center ">
        <div className="w-4/5 h-fit min-w-[300px] monGivrer p-8 rounded-2xl text-secondary-30 self-center text-center shadow-2xl shadow-black">
            <div className="m-4 flex flex-col"> 
                <Soustitre soustitre={t("propos")}/>
                <Accordion.Root collapsible type="single"  className='text-secondary-30   w-full mx-auto rounded-xl my-8 p-8 '>
                    <Accordion.Item value="item-1" className=' w-full  mx-auto'>
                        <Accordion.Header  className="">
                            <Accordion.Trigger className='mx-auto group w-full flex flex-row  justify-between '>
                                <span className='TextLg  my-auto'>{t("propostab1")}</span>
                                <ChevronDownIcon  className=" transition-transform duration-300 group-data-[state=open]:rotate-180 text-action-10 w-16 h-16"/>
                            </Accordion.Trigger>
                            <div className="mt-2 mb-2 h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp fit overflow-hidden">
                                <div className="h-fit TextBasePlus my-2">
                                    <p>{t("propostab1contenue")}</p>
                                </div>
                                <div className="mt-4  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-2" className='w-full  mx-auto'>
                        <Accordion.Header  className="">
                            <Accordion.Trigger className='mx-auto group w-full flex flex-row  justify-between '>
                                <span className='TextLg  my-auto'>{t("propostab2")}</span>
                                <ChevronDownIcon  className="transition-transform duration-300 group-data-[state=open]:rotate-180 text-action-10 w-16 h-16"/>
                            </Accordion.Trigger>
                            <div className="mt-2 mb-2  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-fit overflow-hidden">
                                <div className="h-fit TextBasePlus my-2">
                                    <p>{t("propostab2contenue")}</p>
                                </div>
                                <div className="mt-4  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-3" className=' w-full mx-auto'>
                        <Accordion.Header  className="">
                            <Accordion.Trigger className='mx-auto group w-full flex flex-row  justify-between '>
                                <span className='TextLg  my-auto'>{t("propostab3")}</span>
                                <ChevronDownIcon  className="transition-transform duration-300 group-data-[state=open]:rotate-180 text-action-10 w-16 h-16"/>
                            </Accordion.Trigger>
                            <div className="mt-2 mb-2  h-1  rounded-full  bg-secondary-30 m-auto"/>
                        </Accordion.Header>
                        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-fit overflow-hidden">
                                <div className="h-fit TextBasePlus my-2">
                                    <p>{t("propostab2contenue")}</p>
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