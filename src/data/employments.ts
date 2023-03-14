export interface Employment {
    role: string;
    company: string;
    link: string;
    duration: {
        from: string;
        to: string;
    };
}

export const employments: Array<Employment> = [
    {
        role: "Backend Developer",
        company: "zip24",
        link: "https://www.zip24.com/",
        duration: {
            from: "Jan 2022",
            to: "now",
        },
    },
    {
        role: "Education Mentor",
        company: "PDP Academy",
        link: "https://www.pdp.uz/",
        duration: {
            from: "Sep 2021",
            to: "Jan 2022",
        },
    },
];
