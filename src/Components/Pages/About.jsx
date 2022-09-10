import { Heading, VStack, HStack, Text, Box, Image, Button } from '@chakra-ui/react';
import React from 'react';
import SinglePers from "../../Images/single-pers.png";
import Twopers from "../../Images/two-pers-hand-shake.png";
import Singleman from "../../Images/man-sitting.png";
import MaleWithStats from "../../Images/perswithstats.png"
import { ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { List, ListItem, ListIcon, } from '@chakra-ui/react'

const CardComp = (props) => {
    return (
        <Box w='18.75em' h='35.9em'>
            {props.image}
            <Heading lineHeight='2.5em' fontFamily='Open Sans' fontSize='1.5em' fontWeight='25em'>Cool Feature Title</Heading>
            <Text lineHeight='2em' fontFamily='Open Sans' fontSize='1em' fontWeight='20em'>
                Learning curve network
                <br /> effects return on investment.</Text>
            <Button mt='1.5em' p='oem 1em' w='10.25em' variant='outline' textDecoration={'underline'} rightIcon={<ArrowForwardIcon />}>
                Explore Page
            </Button>
        </Box>
    )
}

export default function AboutSection() {
    return (
        <Box>
            <VStack>
                <Text fontFamily='Open Sans' fontSize='1.25em'>our Service</Text>
                <Heading fontFamily='Manrope' textAlign='center' fontSize='3em'
                    lineHeight='2em' fontWeight='20em' color='#000000'
                >Handshake infographic mass market <br /> crowdfunding iteration.
                </Heading>
            </VStack>
            <HStack spacing='24px' justify='center' gap={10}>
                <Box w='18.75em' h='35.9em'>

                    <CardComp image={<Image src={SinglePers} />} />

                </Box>
                <Box w='18.75em' h='35.9em'>
                    <CardComp image={<Image src={Twopers} />} />
                </Box>
                <Box w='18.75em' h='35.9em'>
                    <CardComp image={<Image src={Singleman} />} />
                </Box>
            </HStack>
            <HStack width='100%' justify='center' mt='5em'>
                <Image src={MaleWithStats} alt='' width='80' />
                <VStack>
                    <Box ml='5em'>
                        <Heading fontWeight='400' fontSize='2.23em' fontFamily='Manrope' lineHeight='1.5em'>We connect our customers <br />
                            with the best, and help them <br />
                            keep up-and stay open.
                        </Heading>
                        <List spacing={5} mt='2em' mb='2.2em'>
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
                </VStack>
            </HStack>
        </Box>
    )
}