import React from 'react';
import { ListItem, HStack, UnorderedList, Image, Stack, Box, Button, Heading, Text, } from '@chakra-ui/react'
import HeaderLogo from "../../Images/Boldo.png"
import SideImages from './SideImage';


export default function WelcomeBox() {
    return (
        <>
            <Box>
                <Box bgColor='#ffffff' width='20em'>

                </Box>
                <UnorderedList color='white' listStyleType='none'>
                    <HStack justify='flex-end' align='center' padding='3.5em .625em' m={'0em 5em'} gap={10}>
                        <ListItem marginRight='auto'><Image src={HeaderLogo} /></ListItem>
                        <ListItem>Products</ListItem>
                        <ListItem>Service</ListItem>
                        <ListItem>About</ListItem>
                        <Button color='#0A2640'>Login</Button>
                    </HStack>
                </UnorderedList>
                <Box m={'1em 5em'} p='.7em .625em'>
                    <Heading as={'h4'} size='md' fontFamily='Manrope' fontSize='2em'
                        color='#ffffff' lineHeight='1.5em' fontWeight='1em'
                    >
                        Save time by building <br /> fast with Boldo Template
                    </Heading>
                    <Text color={'white'} fontSize='sm' fontFamily={'sans-serif'} pt={'1.4em'}>
                        Funding handshake buyer business-to-business metrics iPad partnership. <br />
                        First mover advantage innovator success deployment non-disclosure.
                    </Text>
                    <Box gap={3} mt='1.5em'>
                        <Button bgColor={'#65E4A3'} mr={'1em'} border='2px solid #69E6A6' h='3em' w='15.4em'
                            borderRadius='3.5em' p='16px 56px'
                        >
                            Buy Template
                        </Button>
                        <Button w='11.6em' h='3em' borderRadius='3.5em' border={'2px solid #FFFFFF'} p='16px 56px'>Explore</Button>
                        <SideImages />
                    </Box>
                </Box>
            </Box>
        </>
    )
}