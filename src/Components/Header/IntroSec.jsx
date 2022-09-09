import React from 'react';
import { ListItem, HStack, UnorderedList, Image, Stack, Box, Button, Heading, Text, } from '@chakra-ui/react'
import HeaderLogo from "../../Images/Boldo.png"


export default function WelcomeBox() {
    return (
        <Box>
            <UnorderedList color='white' listStyleType='none'>
                <HStack justify='flex-end' align='center' padding='3.5em .625em' m={'0em 5em'} gap={10}>
                    <ListItem marginRight='auto'><Image src={HeaderLogo} /></ListItem>
                    <ListItem>Products</ListItem>
                    <ListItem>Service</ListItem>
                    <ListItem>About</ListItem>
                    <Button color='#0A2640'>Login</Button>
                </HStack>
            </UnorderedList>
            <Box m={'1em .625em'}>
                <Heading as={'h4'} size='sm' fontFamily='Manrope' fontSize='md'
                    color='#ffffff' lineHeight='2.103'
                >
                    Save time by building  fast with Boldo Template
                </Heading>
                <Text color={'white'} fontSize='sm' fontFamily={'sans-serif'}>
                    Funding handshake buyer business-to-business metrics iPad partnership. <br />
                    First mover advantage innovator success deployment non-disclosure.
                </Text>
            </Box>
        </Box>
    )
}