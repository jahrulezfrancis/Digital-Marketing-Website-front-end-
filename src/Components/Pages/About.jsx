import { Heading, VStack, HStack, Text, Box, Image, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';
import SinglePers from "../../Images/single-pers.png";
import Twopers from "../../Images/two-pers-hand-shake.png";
import Singleman from "../../Images/man-sitting.png";
import { ArrowForwardIcon } from '@chakra-ui/icons';

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
        </Box>
    )
}