import React from 'react';
import { ListItem, HStack, Box, UnorderedList, Image, Button, } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../Images/Logo.png"
import Navigation from '../Header/Navigation';

export default function BlogSection() {
    return (
        <Box>
            <UnorderedList color='black' listStyleType='none'>
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