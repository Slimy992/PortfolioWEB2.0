import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n 
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          presentation: "Presentation",
          competence: "Competences",
          projet: "Projects",
          contact: "Contact",
          profile : "Presentation",
          profiletitre : "Hi, my name is Gabriel Lafrance 👋",
          profiledesc : "I'm a young Web Developer",
          profileloc : "🌎 Located in Rimouski, QC, Canada",
          profilework : "💻 Currently working for myself",
          propos : "About Myself",
          propostab1 : "My School Cursus",
          propostab1contenue : "I started my educational journey in computer science in 2021 with the aim of obtaining a College Diploma (DEC) in Computer Techniques at Cégep de Rimouski. Throughout my studies, I delved into web programming and expanded my knowledge in HTML, CSS, JavaScript, TypeScript, and React. Alongside my studies, I undertook several small projects to further develop my skills beyond the classroom curriculum. During these projects, I explored fundamental concepts of website development, such as accessibility and search engine optimization.",
          propostab2 : "My Goals",
          propostab2contenue : "My objective is to secure a position as a web developer within a dynamic and innovative company where I can apply my skills and creativity to contribute to the organization's growth while further developing my skills and expertise as a web developer.",
          propostab3 : "My Experiences",
          propostab3contenue : "I have primarily focused on web development in terms of my experience. Over the past three and a half years, I have been consistently honing my skills to become the best web developer I can be. I possess proficiency in HTML, CSS, JavaScript, and TypeScript. I have completed several personal projects, including a responsive web portfolio and a web application utilizing MySQL, Express, React, and Node.js. Additionally, I have two years of experience with C++ and I am currently learning C# on the side.",
          competenceExperience : "Experience : ",
          an : "1 year",
          deuxans : "2 years",
          deuxansdemi : "2 years and a half",
          troisans : "3 years",
          projetdesc : "The following projects showcase my skills and experience through concrete examples of my work. These projects demonstrate my ability to solve complex problems and work with various technologies.",
          projet1 : "My Portfolio",
          projetdesc1 : "It's simply my portfolio as a young Web Developer",
          projet2 : "Super-Loc",
          projetdesc2 : "A React App using a custom API and a MySQL Database",
          projet3 : "Météo-Partout",
          projetdesc3 : "A simple exercice using an API with vanilla JavaScript",
          votrenom : "Your Name",
          votremessage : "Your Message",
          votremail : "Your Mail",
          envoi : "Sending...",
          envoyer: "Send",
        },
      },
      fr: {
        translation: {
            presentation: "Présentation",
            competence: "Compétences",
            projet: "Projets",
            contact: "Contact",
            profile : "Présentation",
            profiletitre : "Salut, je m'appelle Gabriel Lafrance 👋",
            profiledesc : "Je suis un jeune développeur Web",
            profileloc : "🌎 Situé à Rimouski, QC, Canada",
            profilework : "💻 Présentement à mon propre compte",
            propos : "À Propos De Moi",
            propostab1 : "Mon Parcours Scolaire",
            propostab1contenue : "J'ai commencé mon parcours scolaire en informatique, en 2021, dans le but d'obtenir un diplôme d'études collégiales (DEC) en Techniques de l'informatique, au Cégep de Rimouski. Durant mon parcours , j'ai approfondi mes connaissances en programmation web, notamment en HTML, CSS, JavaScript, TypeScript et React. En parallèle de mes études, j'ai effectué plusieurs petits projets dans le but de développer mes compétences plus loin de ce qui était vu en classe. Au cours de ces projets, j'ai étudié les concepts fondamentaux du développement de sites web tels que l'accessibilité et l'optimisation pour les moteurs de recherche.",
            propostab2 : "Mes Objectifs",
            propostab2contenue : "J'ai pour objectif d'obtenir un poste de développeur web au sein d'une entreprise dynamique et innovante où je peux utiliser mes compétences et ma créativité pour contribuer à la croissance de l'organisation tout endéveloppant mes compétences et mon expertise en tant que développeur web.",
            propostab3 : "Mon Expériences",
            propostab3contenue : "J'ai principalement de l'expérience en développement web. Depuis trois ans et demi, je me forme continuellement pour devenir le meilleur développeur web possible. Je suis compétent en HTML, CSS, JavaScript et TypeScript. J’ai complété plusieurs projets personnels, notamment ce portolio web responsive et une application web utilisant MySQL, Express, React et Node.js. En plus de tout cela, j'ai deux ans d'expérience avec C++ et maintenant j'apprend C# sur le côté.",
            competenceExperience : "Expérience : ",
            an : "1 an",
            deuxans : "2 ans",
            deuxansdemi : "2 ans et demi",
            troisans : "3 ans",
            projetdesc : "Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail. Ces projets reflètent mes capacités à résoudre des problèmes complexes et à travailler avec différentes technologies.",
            projet1 : "Mon Portfolio",
            projetdesc1 : "C'est mon portoflio en tant que jeune développeur Web.",
            projet2 : "Super-Loc",
            projetdesc2 : "Une application React avec un API et une base de donnée MySQL.",
            projet3 : "Météo-Partout",
            projetdesc3 : "Un exercice simple avec un API en JavaScript vanilla sans framework",
            votrenom : "Votre Nom",
            votremessage : "Votre Message",
            votremail : "Votre Mail",
            envoi : "En envoie...",
            envoyer: "Envoyer",
        },
      },
      },
    })

export default i18n;