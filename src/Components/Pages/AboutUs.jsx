import React from 'react'
import { Box, UnorderedList, HStack, ListItem, Image, Button, VStack, Heading, Text } from '@chakra-ui/react'
import HeaderLogo from "../../Images/Logo.png"
import { NavLink } from 'react-router-dom'
import FirstOne from "../../Images/man-calling.png"
import SecondOne from "../../Images/pers-near-trash.png"
import ThirdOne from "../../Images/woman-making-call.png"
import FourthOne from "../../Images/Job-seeker.png"
import FifthOne from "../../Images/three-men-in-workshop.png"

export function AboutUs() {
    return (
        <Box background='#0A2640' height={'49.875em'}>
            <UnorderedList color='white' listStyleType='none'>
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