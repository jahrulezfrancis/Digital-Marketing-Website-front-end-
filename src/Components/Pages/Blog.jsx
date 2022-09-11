import React from 'react';
import { Box, VStack, Text, Heading, HStack, Image, Flex, Avatar, Stack } from '@chakra-ui/react';
import FirstOne from "../../Images/Job-seeker.png"
import SecondOne from "../../Images/pers-near-trash.png"
import ThirdOne from "../../Images/woman-on-couch.png"


const PostTemplate = (props) => {
    return (
        <Box  h='40em'>
            <Image src={props.image} />
            <VStack align='start'>
                <HStack align='start' pt='2em' pb='1em'>
                    <Text fontSize='1em' fontFamily="Open Sans" fontWeight='700' color='#0A2640'>Category</Text>
                    <Text fontSize='1em' fontFamily="Open Sans" fontWeight='400' color='#777777'>November 22, 2022</Text>
                </HStack>
                {props.text}
                <HStack>
                    <Flex gap='3' alignItems='flex-end' justify='flex-end' >
                        <Avatar size='sm' name='Jahrulez Francis' src={FirstOne} />
                        <Flex direction='column' p='.2em'>
                            <Text>Longsaar Francis</Text> <br />
                        </Flex>
                    </Flex>
                </HStack>
            </VStack>
        </Box>
    )
}


export function BlogSection() {
    return (
        <Box w="100%" h='30em'>
            <Stack align='center'>
                <VStack pt='8em'>
                    <Text fontFamily='Open Sans' fontSize='1.25em'>Our Blog</Text>
                    <Heading textAlign='center' fontFamily='Manrope' fontWeight='400' lineHeight='1.5em'>
                        Value proposition accelerator product <br />
                        management venture
                    </Heading>
                </VStack>
                <HStack gap='8'>
                    <PostTemplate
                        image={FirstOne}
                        text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                            Pitch termsheet backing <br />
                            validation focus release
                        </Text>}
                    />
                    <PostTemplate
                        image={SecondOne}
                        text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                            Seed round direct mailing non- <br />
                            disclosure agreement graphical <br />
                            user interface rockstar.
                        </Text>}
                    />
                    <PostTemplate
                        image={ThirdOne}
                        text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                            Beta prototype sales iPad gen-z <br />
                            marketingnetwork effects value <br />
                            proposition
                        </Text>}
                    />
                </HStack>
            </Stack>
        </Box>
    )
}