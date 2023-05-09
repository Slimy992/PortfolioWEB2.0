import portofolio from "../../assets/Project/Portfolio.png"
import meteoPartout from "../../assets/Project/météopartout.png"
import SuperLoc from "../../assets/Project/Super-Loc.png"


const competence = [
    {
        nom : "JavaScript",
        rating : 4.5,
        experience : "3 ans",
    },
    {
        nom : "HTML",
        rating : 5,
        experience : "3 ans",
    },
    {
        nom : "C++",
        rating : 4,
        experience : "2 ans",
    },
    {
        nom : "TypeScript",
        rating : 4,
        experience : "2 ans et demi",
    },
    {
        nom : "CSS",
        rating : 4.5,
        experience : "3 ans",
        
    },
    {
        nom : "C#",
        rating : 3.5,
        experience : "1 an",
    },
];

const projects = [
    {
      nom: "Mon Portfolio",
      description:
        "C'est mon portoflio en tant que jeune développeur Web.",
      tags: [
        {
          name: "React",
          couleur: "text-blue-500",
        },
        {
          name: "Tailwind",
          couleur: "text-sky-400",
        },
        {
            name: "Radix",
            couleur: "text-pink-600",
          },
      ],
      image: portofolio,
      lien: "https://github.com/Slimy992/PortfolioWEB2.0",
    },
    {
      nom: "Super-Loc",
      description:
        "Une application React avec un API et une base de donnée MySQL.",
      tags: [
        {
            name: "React",
            couleur: "text-blue-500",
        },
        {
          name: "MySQL",
          couleur: "text-purple-600",
        },
        {
          name: "Express",
          couleur: "text-green-500",
        },
      ],
      image: SuperLoc,
      lien: "https://github.com/Slimy992/BoutiqueLocation",
    },
    {
      nom: "Météo-Partout",
      description:
        "Un exercice simple avec un API en JavaScript vanilla sans framework",
      tags: [
        {
          name: "JavaScript",
          couleur: "text-yellow-400",
        },
        {
          name: "Cookies",
          couleur: "text-yellow-900",
        },
        {
          name: "Express",
          couleur: "text-green-500",
        },
      ],
      image: meteoPartout,
      lien: "https://github.com/Slimy992/SiteMeteo",
    },
  ];

export { competence, projects };