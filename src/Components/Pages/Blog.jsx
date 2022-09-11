import React from 'react';
import { Box, VStack, Text, Heading, HStack, Image , Flex, Avatar} from '@chakra-ui/react';
import FirstOne from "../../Images/Job-seeker.png"
import Second from "../../Images/pers-near-trash.png"
import SecondOne from "../../Images/woman-on-couch.png"


export function BlogSection() {
    return (
        <Box w="100%" h='30em'>
            <VStack pt='8em'>
                <Text fontFamily='Open Sans' fontSize='1.25em'>Our Blog</Text>
                <Heading textAlign='center' fontFamily='Manrope' fontWeight='400' lineHeight='1.5em'>
                    Value proposition accelerator product <br />
                    management venture
                </Heading>
            </VStack>
            <HStack>
                <Box>
                    <Image src={FirstOne} alt='Job-seeker' />
                    <VStack align='start'>
                        <HStack>
                            <Text>Category</Text>
                            <Text>November 22, 2022</Text>
                        </HStack>
                        <Text>
                            Pitch termsheet backing <br />
                            validation focus release.
                        </Text>
                        <HStack>
                        <Flex gap='3'>
                            <Avatar size='sm' name='Jahrulez Francis' src={Second} />
                            <Flex direction='column' p='.2em'>
                                <Text>Longsaar Francis</Text> <br />
                            </Flex>
                        </Flex>
                        </HStack>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}