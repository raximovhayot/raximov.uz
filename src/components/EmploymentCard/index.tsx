import {Heading, HStack, Link, Text, VStack} from "@chakra-ui/react";

import {Employment} from "../../data/employments";

export const EmploymentCard = ({
                                   role,
                                   info,
                                   company,
                                   duration,
                                   link,
                                   currently
                               }: Employment) => {
    return (
        <VStack alignItems="stretch">
            <HStack>
                <Heading as="h3" size="md">
                    {role}
                </Heading>
                {currently ? <Text textStyle="sectionHeading">Currently</Text> : ""}
            </HStack>
            <VStack alignItems="stretch" spacing={3}>
                <Text>
                    {info}
                </Text>
                <HStack justifyContent="space-between" color="gray.100">
                    <Link href={link}>{company}</Link>
                    <Text>
                        {duration.from} - {duration.to}
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
};
