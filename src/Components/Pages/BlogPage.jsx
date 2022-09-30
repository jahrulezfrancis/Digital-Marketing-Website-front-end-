import React from 'react';
import {
    ListItem, HStack, Box, UnorderedList, Image, Button, useMediaQuery,
    Flex, Stack, VStack, Heading, Text, Avatar
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../Images/Logo.png"
import FirstOne from "../../Images/Job-seeker.png"
import SecondOne from "../../Images/pers-near-trash.png"
import ThirdOne from "../../Images/woman-on-couch.png"
import { Footer, NewsLetter } from './Blog';


function CardTemplate(props) {
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

function Navigation() {
    return (
        <Box bgColor='#0A2640'>
            <UnorderedList color='white' listStyleType='none' height='10em'>
                <HStack justify='flex-end' align='center' padding='3.5em .625em' mt='0em' ml='1em' gap={10}>
                    <ListItem marginRight='auto'><Image src={HeaderLogo} /></ListItem>
                    <NavLink to="/">
                        <ListItem>Products</ListItem>
                    </NavLink>
                    <NavLink to='/'>
                        <ListItem>Service</ListItem>
                    </NavLink>
                    <NavLink to='about-us'>
                        <ListItem>About</ListItem>
                    </NavLink>
                    <Button color='#0A2640' marginEnd='2em'>Login</Button>
                </HStack>
            </UnorderedList>
        </Box>
    )
}

export default function BlogSection() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box>
            <Navigation />
            <Box w="100%" h='27em'>
                <Stack align='center' >
                    <VStack pt='8em'>
                        <Text fontFamily='Open Sans' fontSize='1.25em'>Our Blog</Text>
                        <Heading textAlign='center' fontFamily='Manrope' fontWeight='400' lineHeight='1.5em'>
                            Value proposition accelerator product <br />
                            management venture
                        </Heading>
                    </VStack>
                    <Flex direction={onMobile ? 'column' : 'row'} gap='8' Wrap='wrap' justify='center' align='center'>
                        <CardTemplate
                            image={FirstOne}
                            text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                                Pitch termsheet backing <br />
                                validation focus release
                            </Text>}
                        />
                        <CardTemplate
                            image={SecondOne}
                            text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                                Seed round direct mailing non- <br />
                                disclosure agreement graphical <br />
                                user interface rockstar.
                            </Text>}
                        />

                        <CardTemplate
                            image={SecondOne}
                            text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                                Seed round direct mailing non- <br />
                                disclosure agreement graphical <br />
                                user interface rockstar.
                            </Text>}
                        />

                        <CardTemplate
                            image={SecondOne}
                            text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                                Seed round direct mailing non- <br />
                                disclosure agreement graphical <br />
                                user interface rockstar.
                            </Text>}
                        />

                        <CardTemplate
                            image={SecondOne}
                            text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                                Seed round direct mailing non- <br />
                                disclosure agreement graphical <br />
                                user interface rockstar.
                            </Text>}
                        />

                        <CardTemplate
                            image={ThirdOne}
                            text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                                Beta prototype sales iPad gen-z <br />
                                marketingnetwork effects value <br />
                                proposition
                            </Text>}
                        />
                    </Flex>
                    <Button fontFamily='Open Sans' borderRadius='3em' border='solid 1px #0A2640' p='1.3em'
                        width='10em' fontSize='1.2em' fontWeight='700'>
                        Load More
                    </Button>
                    <Stack w='100%' m='3em' p='3em'>
                        <NewsLetter />
                    </Stack>
                    <Stack justify='start' w='100%' p='0em 2em'>
                        <Footer />
                    </Stack>
                </Stack>
            </Box>
        </Box>

    )
}