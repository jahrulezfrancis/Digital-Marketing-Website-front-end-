import React from 'react';
import { Box, VStack, Text, Heading, HStack, Image, Flex, Avatar, Stack, Button, Input } from '@chakra-ui/react';
import FirstOne from "../../Images/Job-seeker.png"
import SecondOne from "../../Images/pers-near-trash.png"
import ThirdOne from "../../Images/woman-on-couch.png"


const PostTemplate = (props) => {
    return (
        <Box h='30em'>
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


export const NewsLetter = () => {
    return (
        <Box width='100%' height='20em' bgColor='#1C3D5B' mt='5em'>
            <VStack>
                <Text mt='1.5em' textAlign='center' color='white' fontSize='3em' lineHeight='1.5em' fontFamily='Manrope'>
                    An enterprise template to ramp <br />
                    up your company website
                </Text>
                <HStack gap={4}>
                    <Input placeholder='Your Email Address' h='3.5em' width='20em' borderRadius='3.5em' bgColor='#ffffff' />
                    <Button width='13em' p='1.3em' h='3.5em' borderRadius='3.5em' bgColor='#65E4A3'>Start Now</Button>
                </HStack>
            </VStack>
        </Box>
    )
}


export function BlogSection() {
    return (
        <Box w="100%" h='27em'>
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
                <Button fontFamily='Open Sans' borderRadius='3em' border='solid 1px #0A2640' p='1.3em'
                    width='10em' fontSize='1.2em' fontWeight='700'>
                    Load More
                </Button>
            </Stack>
            <NewsLetter />
        </Box>
    )
}

