import React from 'react';
import { ListItem, HStack, UnorderedList, Image, Box, Button, Heading, Text, Container, useMediaQuery, Center, } from '@chakra-ui/react'
import HeaderLogo from "../../Images/Logo.png"
import SideImages, { BottomImage } from './SideImage';
import { NavLink } from 'react-router-dom';


export default function WelcomeBox() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <>

            <UnorderedList color='white' listStyleType='none'>
                <HStack justify='flex-end' align='center' padding='3.5em .625em' mt='0em' ml='1em' gap={10}>
                    <ListItem marginRight='auto'><Image src={HeaderLogo} /></ListItem>
                    <NavLink to='/products'>
                        <ListItem>Products</ListItem>
                    </NavLink>
                    <NavLink to='service'>
                        <ListItem>Service</ListItem>
                    </NavLink>
                    <NavLink to='about-us'>
                        <ListItem>About</ListItem>
                    </NavLink>
                    <Button color='#0A2640' marginEnd='2em'>Login</Button>
                </HStack>
            </UnorderedList>
            <Box m={'1em 3em'} p='.7em .625em' display='flex' flexDirection={onMobile ? 'column' : 'row'} justifyContent={onMobile ? 'center' : 'start'}>
                <Box width={onMobile ? '100%' : '50%'}>
                    <Box justifyContent={onMobile ? 'center' : 'start'} alignItems='center' mt='5em' display='flex' flexDirection={onMobile ? 'column' : 'column'}>
                        <Heading textAlign={onMobile ? 'center' : 'left'} as={'h4'} size='md' fontFamily='Manrope' fontSize='2em'
                            color='#ffffff' lineHeight='1.5em' fontWeight='1em'
                        >
                            Save time by building <br /> fast with Boldo Template
                        </Heading>
                        <Text textAlign={onMobile ? 'center' : 'left'} color={'white'} fontSize='sm' fontFamily={'sans-serif'} pt={'1.4em'} mt='1em'>
                            Funding handshake buyer business-to-business metrics iPad partnership. <br />
                            First mover advantage innovator success deployment non-disclosure.
                        </Text>
                    </Box>
                    <Box display='flex' gap={3} mt='1.5em' justifyContent={onMobile ? 'center' : 'start'}>
                        <Button bgColor={'#65E4A3'} mr={'1em'} border='2px solid #69E6A6' h='3em' w='15.4em'
                            borderRadius='3.5em' p='16px 56px'
                        >
                            Buy Template
                        </Button>
                        <Button w='11.6em' h='3em' borderRadius='3.5em' border={'2px solid #FFFFFF'} p='16px 56px'>Explore</Button>
                    </Box>
                </Box>
                <Box width={ onMobile ? '100%' : '50%'} mt={onMobile ? '1em' : 'oem'}>
                    <SideImages />
                </Box>
            </Box>
            <BottomImage />

        </>
    )
}