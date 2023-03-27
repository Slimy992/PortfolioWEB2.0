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
        "C'est simplement ce que vous voyez présentementement, mon portoflio en tant que jeune développeur Web.",
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
      image: "../../assets/Project/Portfolio.png",
      lien: "https://github.com/Slimy992/PortfolioWEB2.0",
    },
    {
      nom: "Blizzard Club",
      description:
        "Une boutique en ligne utilisant MySql pour gérer les articles, les utilisateurs et leur paniers ainsi que Stripe pour les payements.",
      tags: [
        {
            name: "React",
            couleur: "text-blue-500",
        },
        {
          name: "MySql",
          couleur: "text-blue-600",
        },
        {
          name: "Stripe",
          couleur: "text-violet-500",
        },
      ],
      image: "../../assets/Project/Portfolio.png",
      lien: "https://github.com/",
    },
    {
      nom: "Project 3",
      description:
        "Encore à trouver",
      tags: [],
      image: "../../assets/Project/Portfolio.png",
      lien: "https://github.com/",
    },
  ];

export { competence, projects};