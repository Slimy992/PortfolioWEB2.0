import emailjs from '@emailjs/browser';
import React from 'react';

import { Soustitre } from "../builder/SousTitreSection";
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';


const Contact = () => {

    const { t } = useTranslation();

    const formRef = React.createRef<HTMLFormElement>
    const [form, setForm] = React.useState({
        nom: "",
        email: "",
        message: "",
    });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (form.nom === "" ||  form.email === "" || form.message === ""){
      alert("Erreur interne : Votre mail n'a pas pu être envoyer. Veuillez remplir tout les champs requis.");
      return;
    }
    else{
      setLoading(true);
      emailjs
      .send(
        "service_rkv2m6k",
        "template_7c1ucou",
        {
          user_name: form.nom,
          to_name: "Gabriel Lafrance",
          user_email: form.email,
          to_email: "lafgab01@hotmail.com",
          message: form.message,
        },
        "pnrM3wdjphbX_O0lb"
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci de m'avoir contacté, je vais essayer de vous répondre dans les plus brefs délais.");
          setForm({
            nom: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Erreur interne : Votre mail n'a pas pu être envoyer. Impossible de joindre le destinataire");
        }
      );
    }
    
  };
  return (
    <section id="Contact" className="mt-32 h-1/2 flex flex-col align-midle justify-center content-center">
        <div className="w-4/5 h-fit min-w-[300px] monGivrer rounded-2xl text-white self-center text-center p-8 shadow-2xl shadow-black">
                <Soustitre soustitre="Contact"/>
                <form ref={formRef} onSubmit={handleSubmit} className="my-4 flex flex-col gap-8" >
                  <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center gap-4">
                    <label className="flex flex-col">
                        <span className="text-white TextLgPlus my-4">{t("votrenom")} : </span>
                        <input type="text" name="nom" value={form.nom} onChange={handleChange}
                        className=" py-2 p-4  placeholder:text-secondary text-primary-60 rounded-lg outline-none TextBase w-full"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white TextLgPlus my-4">{t("votremail")} : </span>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                        className=" py-2 p-4 mx-auto text-primary-60 rounded-lg outline-none  TextBase w-full" 
                        />
                    </label>
                  </div>
                  <label className="flex flex-col self-center w-full">
                      <span className="text-white TextLgPlus my-4">{t("votremessage")} : </span>
                      <textarea rows={9} name="message" value={form.message} onChange={handleChange}
                      className="py-4 px-6 text-primary-60 rounded-xl outline-none TextBase"
                      />
                  </label>
                  <button type="submit" className="py-2 rounded-xl TextBase BoutonMenu self-center w-full">
                      <PaperAirplaneIcon className='w-6 h-6 mr-2 mt-1'/>
                      <span className='mt-[1px]'>{loading ? t("envoi") : t("envoyer")}</span>
                  </button>
                </form>
            </div>
    </section>
    );
}

export default Contact;