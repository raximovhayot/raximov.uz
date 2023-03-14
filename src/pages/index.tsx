import {List, ListItem, VStack, Heading} from "@chakra-ui/react";
import {NextPage} from "next";

import {EmploymentCard} from "../components/EmploymentCard";
import {EducationCard} from "../components/EducationCard";
import {Hero} from "../components/Hero";
import {employments} from "../data/employments";
import {educations} from "../data/educations";

const HomePage: NextPage = () => {
    return (
        <>
            <VStack spacing={16} alignItems="flex-start">
                <Hero/>
                <VStack spacing={8} w="full" alignItems="stretch">
                    <Heading as="h2">
                        👨‍💻 Experience
                    </Heading>

                    <List spacing={6}>
                        {employments.map((employment) => (
                            <ListItem key={employment.company}>
                                <EmploymentCard {...employment} />
                            </ListItem>
                        ))}
                    </List>
                </VStack>
                <VStack spacing={8} w="full" alignItems="stretch">
                    <Heading as="h2" >
                        🏫 Education
                    </Heading>

                    <List spacing={6}>
                        {educations.map((education) => (
                            <ListItem key={education.institution}>
                                <EducationCard {...education} />
                            </ListItem>
                        ))}
                    </List>
                </VStack>
            </VStack>
        </>
    );
};

export default HomePage;
