export interface Education {
    faculty: string;
    info: string;
    institution : string;
    link: string;
    currently:boolean;
    duration: {
        from: string;
        to: string;
    };
}

export const educations: Array<Education> = [
    {
        faculty: "CyberSecurity",
        info: "",
        institution: "Tashkent University of Information Technologies",
        link: "https://www.tuit.uz/",
        currently: true,
        duration: {
            from: "Sep 2020",
            to: "July 2025",
        },
    },
    {
        faculty: "FullStack Web Development",
        info: "I learned programming for 1 year with the help of online tutors.",
        institution: "PDP Academy",
        link: "https://www.pdp.uz/",
        currently: false,
        duration: {
            from: "Sep 2020",
            to: "July 2021",
        },
    },
];
