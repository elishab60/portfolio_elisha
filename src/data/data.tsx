import { Icons } from "../components/icons";

export const DATA = {
    name: "Elisha BAJEMON",
    initials: "EB",
    avatarUrl: "/me.png",
    description:
        "Étudiant ingénieur en recherche d'alternance.",
    summary: "**Étudiant ingénieur à l'ECE Paris, spécialisé en Data Science et Intelligence Artificielle**, je suis à la recherche d'un **contrat d'apprentissage de 36 mois**, à partir du **2 septembre 2024**.Mon rythme d'alternance est de **3 semaines employeur / 3 semaines école**.",
    work: [
        {
            company: "Programme Art & Tech",
            href: "",
            badges: [],
            title: "Séjour linguistique",
            logoUrl: "/usa.png",
            start: "janvier 2024",
            end: "Février 2024",
            description:
                "Analyse des **tendances technologiques** dans la Baie de **San Francisco.**\n\n\n" +
                "Développement de **projets technologiques** sous la supervision **d'ingénieurs de la Silicon Valley.**\n\n\n" +
                "Exposition de projets démontrant la **gestion de projet** et l'interaction technologie-créativité.",
        },
        {
            company: "Développement serveur de jeu",
            badges: [],
            title: "Projet étudiant",
            logoUrl: "/gmod.png",
            start: "Septembre 2022",
            end: "Janvier 2023",
            description:
                "**Développement de serveur de jeu :** Conception, développement et déploiement d'un serveur de jeu multijoueur utilisant **Garry's Mod.**\n\n\n\n" +
                "**Cybersécurité :** Implémentation de solutions de cybersécurité pour protéger les données des utilisateurs et assurer la sécurité du serveur.\n\n\n\n" +
                "**Gestion de bases de données :** Utilisation de **SQL** et de gestion de bases de données pour stocker et gérer les informations des utilisateurs.\n\n\n\n" +
                "**Coordination d'équipe de développement :** Supervision d'une équipe de **3 développeurs,** gestion des tâches et des responsabilités, et application des **méthodologies agiles** pour assurer le bon déroulement du projet.",
        },
    ],
    skills: {
        hardSkills: [
            "HTML5", "CSS3", "Javascript",
            "React", "React Native", "Swift",
            "Angular", "VueJs", "NodeJs",
            "C", "Python", "R", "PHP",
            "Pandas", "NumPy", "PyTorch",
            "SQL", "MongoDB", "Power BI",
            "Quartus", "Proteus", "FPGA",
        ],
        softSkills: [
            "Méthodologies agiles",
            "Gestion de projet",
            "Pack Office",
            "Suite Adobe",
            "Français (natif)",
            "Anglais (C1)",
            "Allemand (B2)",
            "Russe (A1)",
        ],
    },
    education: [
        {
            school: "ECE PARIS",
            href: "https://buildspace.so",
            degree: "Programme Grande École Ingénieur en DATA / IA",
            logoUrl: "/ECE.png",
            start: "2023",
            end: "2027",
            description: `Formation approfondie en **Intelligence Artificielle, Data Science, et Machine Learning.**
                Projets pratiques en **Big Data, analyses prédictives et visualisation de données.**
                Cours avancés en **programmation (Python, R)** et en gestion de **bases de données (SQL).**`,
        },
        {
            school: "UTT (Université de Technologie de Troyes)",
            href: "https://uwaterloo.ca",
            degree: "Tronc Commun en ingénierie",
            logoUrl: "/UTT.png",
            start: "2021",
            end: "2023",
            description: " - Cours fondamentaux en **mathématiques, physique, et informatique.**\n" +
                "- Introduction aux **méthodes de gestion de projets** et à la **cybersécurité.**\n" +
                "- Initiation aux **langages de programmation (C, Python)** et à **l'analyse de\n" +
                "données.**",
        },
        {
            school: "Lycée Félix Faure",
            href: "https://wlu.ca",
            degree: "Baccalauréat général",
            logoUrl: "/FélixFaure.jpg",
            start: "2019",
            end: "2021",
            description: `- **Baccalauréat général** 
- Spécialités : Mathématiques, Physique-Chimie, SVT
- Options : Mathématiques expertes, DNL Euro Anglais Physique-Chimie
- Mention : Très bien`,
        },

    ],
    contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://dub.sh/dillion-github",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://dub.sh/dillion-linkedin",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://dub.sh/dillion-twitter",
                icon: Icons.x,

                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "https://dub.sh/dillion-youtube",
                icon: Icons.youtube,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
        },
    },
};