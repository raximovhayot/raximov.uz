import {Heading, HStack, Link, Text, VStack} from "@chakra-ui/react";

import {Education} from "../../data/educations";

export const EducationCard = ({
                                  faculty,
                                  info,
                                  institution,
                                  link,
                                  duration,
                                  currently
                              }: Education) => {
    return (
        <VStack alignItems="stretch">
            <HStack>
                <Heading as="h3" size="md">
                    {faculty}
                </Heading>
                {currently ? <Text textStyle="sectionHeading">Currently</Text> : ""}
            </HStack>
            <VStack alignItems="stretch" spacing={3}>
                <Text>
                    {info}
                </Text>
                <HStack justifyContent="space-between" color="gray.100">
                    <Link href={link}>{institution}</Link>
                    <Text>
                        {duration.from} - {duration.to}
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
};
