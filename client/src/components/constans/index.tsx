import portofolio from "../../assets/Project/Portfolio.png"
import AVenir from "../../assets/Project/AVenir.jpg"
import SuperLoc from "../../assets/Project/Super-Loc.png"


const competence = [
    {
        nom : "JavaScript",
        rating : 4.5,
    },
    {
        nom : "HTML",
        rating : 5,
    },
    {
        nom : "C++",
        rating : 4,
    },
    {
        nom : "TypeScript",
        rating : 4,
    },
    {
        nom : "CSS",
        rating : 4.5,
    },
    {
        nom : "C#",
        rating : 3.5,
    },
];

const projects = [
    {
      nom: "Mon Portfolio",
      description:
        "C'est simplement mon portoflio en tant que jeune développeur Web.",
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
            name: "ReactIcons",
            couleur: "text-pink-600",
          },
      ],
      image: portofolio,
      lien: "https://github.com/Slimy992/PortfolioWEB2.0",
    },
    {
      nom: "Super-Loc",
      description:
        "Un site fonctionnelle avec un API REST et un base de donnée MySQL.",
      tags: [
        {
            name: "React",
            couleur: "text-blue-500",
        },
        {
          name: "MySql",
          couleur: "text-purple-600",
        },
        {
          name: "RESTful",
          couleur: "text-green-500",
        },
      ],
      image: SuperLoc,
      lien: "https://github.com/Slimy992/BoutiqueLocation",
    },
    {
      nom: "Project 3",
      description:
        "Encore à trouver",
      tags: [],
      image: AVenir,
      lien: "https://github.com/",
    },
  ];

export { competence, projects};