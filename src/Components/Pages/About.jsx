import { Heading, VStack, HStack, Text, Box, Image, Button, Stack, useMediaQuery, Avatar, Flex } from '@chakra-ui/react';
import React from 'react';
import SinglePers from "../../Images/single-pers.png";
import Twopers from "../../Images/two-pers-hand-shake.png";
import Singleman from "../../Images/man-sitting.png";
import MaleWithStats from "../../Images/perswithstats.png"
import { ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { List, ListItem, ListIcon, } from '@chakra-ui/react'
import { FiFeather, FiEye } from 'react-icons/fi'
import { BsBrightnessHigh } from 'react-icons/bs'
import FemaleOnCall from "../../Images/pers-making-call.png"
import PaulDropz from "../../Images/buju.jpg"
import Jahrulez from "../../Images/Jahrulez.png"



export const CardComp = (props) => {
    return (
        <Box w='18.75em' h='35.9em'>
            {props.image}
            <Heading lineHeight='2.5em' fontFamily='Open Sans' fontSize='1.5em' fontWeight='25em'>Cool Feature Title</Heading>
            <Text lineHeight='2em' fontFamily='Open Sans' fontSize='1em' fontWeight='20em'>
                Learning curve network
                <br /> effects return on investment.</Text>
            <Button mt='1.5em' p='oem 1em' w='10.25em' variant='outline' bgColor='null'
                textDecoration={'underline'} rightIcon={<ArrowForwardIcon />}>
                Explore Page
            </Button>
        </Box>
    )
}

function Testimonials() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box w='100%' h={onMobile ? '90em' : '50em'} bgColor='#0A2640'>
            <Stack align='center' justify='center' ml={onMobile ? '0em' : '7.5em'} mr={onMobile ? '0em' : '7.5em'} flex='1' flexWrap='wrap'>
                <Heading textAlign={onMobile ? 'center' : 'left'} color='white' fontFamily='Manrope' fontWeight='400'
                    fontSize='2em' mb='2em' mt='1.5em'
                >
                    An enterprise template to ramp <br />
                    up your company website
                </Heading>
                <Flex gap='1.4em' direction={onMobile ? 'column' : 'row'}>
                    <Box w='22em' h='20rem' bgColor='white' borderRadius='.8em' p='1em'>
                        <Text lineHeight='2.25em' fontSize='1.5em' fontWeight={400} fontFamily='Open Sans'>“Buyer buzz partner network disruptive non-disclosure agreement business”</Text>
                        <Flex gap='3'>
                            <Avatar size='md' name='Jahrulez Francis' src={Jahrulez} />
                            <Flex direction='column'>
                                <Text>Longsaar Francis</Text> <br />
                                <Text>jahrulez@jtowngroove</Text>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box w='22em' h='24.625em' bgColor='white' borderRadius='.8em' p='1em' alignSelf='start' flexWrap='wrap'>
                        <Text lineHeight='2.25em' fontSize='1.5em' fontWeight={400} fontFamily='Open Sans'>
                            “Learning curve infrastructure value proposition advisor strategy user
                            experience hypotheses investor.”
                        </Text>
                        <Flex gap='3' mt='1em'>
                            <Avatar size='md' name='Paul Dropz' src={PaulDropz} />
                            <Flex direction='column' flexWrap='wrap'>
                                <Text>Paul Dropz</Text> <br />
                                <Text>dropz@jtowngroove</Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box w='22em' h='22em' bgColor='white' borderRadius='.8em' p='1em'>
                        <Text lineHeight='2.25em' fontSize='1.5em' fontWeight={400} fontFamily='Open Sans'>
                            “Release facebook responsive web design business
                            model canvas seed money monetization.”
                        </Text>
                        <Flex gap='3'>
                            <Avatar size='md' name='Nanret John' src='' />
                            <Flex direction='column'>
                                <Text>Nanret John</Text> <br />
                                <Text>nanret@jtowngroove</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Stack>
        </Box>
    )
}

export default function AboutSection() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box>
            <VStack>
                <Text fontFamily='Open Sans' fontSize='1.25em'>our Service</Text>
                <Heading fontFamily='Manrope' textAlign='center' fontSize='3em'
                    lineHeight='2em' fontWeight='20em' color='#000000'
                >Handshake infographic mass market <br /> crowdfunding iteration.
                </Heading>
            </VStack>
            <Flex direction={onMobile ? 'column' : 'row'} align={onMobile ? 'center' : 'start'} justify={onMobile ? 'center' : 'start'} spacing='24px' gap={10} w='100vw'>
                <CardComp image={<Image src={SinglePers} />} />
                <CardComp image={<Image src={Twopers} />} />
                <CardComp image={<Image src={Singleman} />} />
            </Flex>
            <Flex justify={onMobile ? 'center' : 'center'} align={onMobile ? 'center' : 'center'} direction={onMobile ? 'column' : 'row'} width='100%' mt='5em'>
                <Image src={MaleWithStats} alt='' width='80' />
                <Flex justify='center'>
                    <Box ml={onMobile ? '0em' : '5em'}>
                        <Heading textAlign={onMobile ? 'center' : 'left'} fontWeight='400' fontSize='2.23em' fontFamily='Manrope' lineHeight='1.5em'>We connect our customers <br />
                            with the best, and help them <br />
                            keep up-and stay open.
                        </Heading>
                        <List spacing={5} mt='2em' mb='2.2em' justifyContent={onMobile ? 'center' : 'flex-start'}>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em'>
                                <ListIcon as={CheckCircleIcon} color='black.500' />
                                We connect our customers with the best
                            </ListItem>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em'>
                                <ListIcon as={CheckCircleIcon} color='black.500' />
                                Advisor success customer launch party.
                            </ListItem>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em'>
                                <ListIcon as={CheckCircleIcon} color='black.500' />
                                Business-to-consumer long tail.
                            </ListItem>
                            <ListItem>
                                <Button _hover={{ background: '#37C8BF' }} fontWeight='700' fontFamily='Open Sans' borderRadius='3em'
                                    color='#ffffff' variant='solid' bgColor='#0A2640'
                                >Start now</Button>
                            </ListItem>
                        </List>
                    </Box>
                </Flex>
            </Flex>

            <HStack justify='center'>
                    <Flex direction={onMobile ? 'column' : 'row'} justify={onMobile ? 'center' : 'center'} align={onMobile ? 'center' : 'center'} mt='10em' mr={onMobile ? '0em' : '5em'} wrap='wrap'>
                <VStack mr={onMobile ? '0em' : '3em'}>
                        <Stack justify={onMobile ? 'center' : 'start'} align={onMobile ? 'center' : 'start'}>
                            <Heading fontWeight='400' fontSize='2.23em' fontFamily='Manrope' lineHeight='1.5em'>
                                We connect our customers <br />
                                with the best, and help them <br />
                                keep up-and stay open.
                            </Heading>
                        </Stack>
                        <Stack>
                            <List spacing={5} mt='2em' mb='9em'>
                                <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans'
                                    lineHeight='1.5em' bgColor='#0A2640;' w='25em' h='3.25em' color='#ffffff' alignSelf='center' p='1em'>
                                    <ListIcon as={FiFeather} color='black.500' />
                                    We connect our customers with the best.
                                </ListItem>
                                <ListItem _hover={{ background: '#EDEFEE' }} w='25em' fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em' p='1em'>
                                    <ListIcon as={FiEye} color='black.500' />
                                    Advisor success customer launch party.
                                </ListItem>
                                <ListItem _hover={{ background: '#EDEFEE' }} w='25em' fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em' p='1em'>
                                    <ListIcon as={BsBrightnessHigh} color='black.500' />
                                    Business-to-consumer long tail.
                                </ListItem>
                            </List>
                        </Stack>
                </VStack>
                <Image src={FemaleOnCall} alt='' width='24em' h='40em' />
                    </Flex>
            </HStack>
            <Stack>
                <Testimonials />
            </Stack>
        </Box>
    )
}