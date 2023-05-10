import portofolio from "../../assets/Project/Portfolio.png"
import meteoPartout from "../../assets/Project/météopartout.png"
import SuperLoc from "../../assets/Project/Super-Loc.png"


const competence = [
    {
        nom : "JavaScript",
        rating : 4.5,
        experience : "troisans",
    },
    {
        nom : "HTML",
        rating : 5,
        experience : "troisans",
    },
    {
        nom : "C++",
        rating : 4,
        experience : "deuxans",
    },
    {
        nom : "TypeScript",
        rating : 4,
        experience : "deuxansdemi",
    },
    {
        nom : "CSS",
        rating : 4.5,
        experience : "troisans",
        
    },
    {
        nom : "C#",
        rating : 3.5,
        experience : "an",
    },
];

const projects = [
    {
      nom: "projet1",
      description: "projetdesc1",
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
      nom: "projet2",
      description: "projetdesc2",
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
      nom: "projet3",
      description: "projetdesc3",
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