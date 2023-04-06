import emailjs from '@emailjs/browser';
import React from 'react';

import { Soustitre } from "../builder/SousTitreSection";


function Contact(){
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
          alert("Merci de m'avoir contacter, je vais essayer de vous répondre dans les plus bref délai.");
          setForm({
            nom: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Erreur interne : Votre mail n'a pas pu être envoyer.");
        }
      );
  };
  return (
    <section id="Contact" className="mt-32 h-1/2 flex flex-col align-midle justify-center content-center">
        <div className="w-3/4 h-fit min-w-[300px] monGivrer rounded-2xl text-white self-center text-center">
            <div className="m-4 flex flex-col"> 
                <Soustitre soustitre="Me contacter"/>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col gap-8" >
                <div className="grid Grid1x2 sm:Grid2x1">
                <label className="flex flex-col mr-4">
                    <span className="text-white GrosseurSousTitre mb-4">Votre Nom :</span>
                    <input type="text" name="nom" value={form.nom} onChange={handleChange}
                    placeholder="Quel est votre nom?"
                    className="bg-tertiary py-2 px-4 placeholder:text-secondary text-zinc-800 rounded-lg outline-none BorderNoirThicc GrosseurTexteNormal"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-white GrosseurSousTitre mb-4">Votre Email :</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="Quel est votre email?"
                    className="bg-tertiary py-2 px-4 placeholder:text-secondary text-zinc-800 rounded-lg outline-none BorderNoirThicc GrosseurTexteNormal"
                    />
                </label>
                </div>
                <label className="flex flex-col">
                    <span className="text-white GrosseurSousTitre mb-4">Votre Message :</span>
                    <textarea rows={7} name="message" value={form.message} onChange={handleChange}
                    placeholder="Qu-est-ce que vous voulez me dire?"
                    className="py-4 px-6 placeholder:text-secondary text-zinc-800 rounded-lg outline-none BorderNoirThicc GrosseurTexteNormal"
                    />
                </label>
                <button type="submit" className="py-2 px-4 rounded-xl w-fit text-zinc-800 GrosseurTexteNormal BorderNoirThicc bg-white">
                    {loading ? "En envoi..." : "Envoyer"}
                </button>
                </form>
            </div>
        </div>
    </section>
    );
}

export default Contact;