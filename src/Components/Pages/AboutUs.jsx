import React from 'react'
import { Box, UnorderedList, HStack, ListItem, Image, Button, VStack, Heading, Text, Stack } from '@chakra-ui/react'
import HeaderLogo from "../../Images/Logo.png"
import { NavLink } from 'react-router-dom'
import FirstOne from "../../Images/man-calling.png"
import SecondOne from "../../Images/pers-near-trash.png"
import ThirdOne from "../../Images/woman-making-call.png"
import FourthOne from "../../Images/Job-seeker.png"
import FifthOne from "../../Images/three-men-in-workshop.png"


export const ImageSection = () => {
    return (
        <Box>
            <HStack justify='center' mt='-5em'>
                <VStack>
                    <Image src={FirstOne} alt="" boxSize='16em' />
                    <Image src={SecondOne} alt="" boxSize='16em' />
                </VStack>
                <Image src={ThirdOne} alt="" h='32em' />
                <VStack>
                    <Image src={FourthOne} alt="" boxSize='16em' />
                    <Image src={FifthOne} alt="" boxSize='16em' />
                </VStack>
            </HStack>
        </Box>
    )
}


export function Team() {
    return (
        <Box pt='5em'>
            <VStack>
                <Text>Our team</Text>
                <Heading>The leadership team</Heading>
                <Text>
                    Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                    infographic mass market crowdfunding iteration. Traction stock user experience <br />
                    deployment beta innovator incubator focus.
                </Text>
            </VStack>
        </Box>
    )
}


export function OurStory() {
    return (
        <Box mt='5em' width='100%'>
            <HStack justify='center' align='center'>
                <VStack align='center' justify='center'>
                    <Text color='#777777' textAlign='left' fontSize='1.25em' fontWeight='400' fontFamily='Open Sans'
                        lineHeight='2em'>
                        Our Stoty
                    </Text>
                    <Heading mb='5em' fontSize='2.5em'
                        fontWeight='400' fontFamily='Manrope' lineHeight='2em'>
                        Handshake infographic mass market <br />
                        crowdfunding iteration.
                    </Heading>
                    <Text color='#777777' fontSize='1.1em' fontWeight='400'
                        fontFamily='Manrope' lineHeight='2em'>
                        Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                        infographic mass market crowdfunding iteration. Traction stock user experience <br />
                        deployment beta innovator incubator focus. Sales user experience branding growth <br />
                        hacking holy grail monetization conversion prototype stock network effects. Learning <br />
                        curve network effects return on investment bootstrapping business-to-consumer.
                    </Text>
                </VStack>
            </HStack>

            <Box bgColor='#0A2640' height='32em' mt='5em'>
                <VStack>
                    <Text color='white' fontSize='1.1em' fontWeight='400'
                        fontFamily='Open Sans' lineHeight='2em' mt='5em'>
                        Our Numbers
                    </Text>
                    <Heading color='white' fontSize='3em' fontWeight='400'
                        fontFamily='Open Sans' lineHeight='2em' textAlign='center'>
                        Handshake infographic mass market <br />
                        crowdfunding iteration.
                    </Heading>
                    <HStack gap={'14'}>
                        <VStack p='1em'>
                            <Heading fontWeight='400' color='#4FE9A4' fontSize='5em' fontFamily='Manrope'>
                                120m
                            </Heading>
                            <Text fontWeight='400' color='white' fontSize='1.25em' fontFamily='Open Sans'>Cool feature title</Text>
                        </VStack>
                        <VStack>
                            <Heading fontWeight='400' color='#4FE9A4' fontSize='5em' fontFamily='Manrope'>10.000</Heading>
                            <Text fontWeight='400' color='white' fontSize='1.25em' fontFamily='Open Sans'>Cool feature title</Text>
                        </VStack>
                        <VStack>
                            <Heading fontWeight='400' color='#4FE9A4' fontSize='5em' fontFamily='Manrope'>240</Heading>
                            <Text fontWeight='400' color='white' fontSize='1.25em' fontFamily='Open Sans'>Cool feature title</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </Box>

        </Box>
    )
}

export function AboutUs() {
    return (
        <Box background='#0A2640' height={'38em'}>
            <UnorderedList color='white' listStyleType='none'>
                <HStack justify='flex-end' align='center' padding='3.5em .625em' mt='0em' ml='1em' gap={10}>
                    <ListItem marginRight='auto'>
                        <Image src={HeaderLogo} />
                    </ListItem>
                    <NavLink to="/">
                        <ListItem>Products</ListItem>
                    </NavLink>
                    <NavLink to='/'>
                        <ListItem>Service</ListItem>
                    </NavLink>
                    <NavLink to=''>
                        <ListItem>About</ListItem>
                    </NavLink>
                    <Button color='#0A2640' marginEnd='2em'>Login</Button>
                </HStack>
            </UnorderedList>

            <VStack textAlign='center'>
                <Text color='white' fontSize='1.25em' fontWeight='400' fontFamily='Open Sans' lineHeight='2em'>About</Text>
                <Heading color='white' fontSize='3.5em' fontWeight='400' fontFamily='Manrope' lineHeight='1.5em'>
                    We love to make great <br />
                    things, things that matter.
                </Heading>
                <Text color='white' fontSize='1em' fontWeight='400' fontFamily='Open Sans' lineHeight='1.7em'>
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage <br />
                    innovator success deployment non-disclosure.
                </Text>
            </VStack>
        </Box>
    )
}