export interface Employment {
    role: string;
    info: string;
    company: string;
    link: string;
    currently: boolean;
    duration: {
        from: string;
        to: string;
    };
}

export const employments: Array<Employment> = [
    {
        role: "Backend Developer",
        info: "Building Enterprise Payment System for Web, Mobile & OTHER.",
        company: "Maroqand LLC",
        link: "#",
        currently: false,
        duration: {
            from: "Nov 2023",
            to: "now",
        },
    },
    {
        role: "Backend Developer",
        info: "Building Enterprise Backend Applications for Web, Mobile & OTHER.",
        company: "zip24",
        link: "https://www.zip24.com/",
        currently: false,
        duration: {
            from: "Jan 2022",
            to: "Nov 2023",
        },
    },
    {
        role: "Education Mentor",
        info: "The basics of programming and algorithms are taught using the C++ programming language",
        company: "PDP Academy",
        link: "https://www.pdp.uz/",
        currently: false,
        duration: {
            from: "Sep 2021",
            to: "Jan 2022",
        },
    },
];
