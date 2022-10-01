import React from "react"
import { ListItem, HStack, UnorderedList, Image, Button, } from "@chakra-ui/react";
import { Box, Spacer, Stack, Menu, IconButton, MenuButton, MenuList, MenuItem, useMediaQuery, } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../Images/Boldo.png"
import { MdMenu } from "react-icons/md"


export default function Navigation() {
    return (

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
    )
}

export function MobileMenu() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box display={onMobile ? 'block' : 'none'} p='1em' w='100vw'>
            <HStack>
                <Stack>
                    <Image src={HeaderLogo} alt='header logo' />
                </Stack>
                <Spacer />
                <Menu>
                    <MenuButton color='white' bgColor='transparent' _hover={'none'} fontSize='2em' as={IconButton} icon={<MdMenu />} />
                    <MenuList w='100vw' h='100vh' gap='1em'>
                        <MenuItem m='1em'>
                            <NavLink to='/'>
                                Product
                            </NavLink>
                        </MenuItem>
                        <MenuItem m='1em'>
                            <NavLink to='/'>
                                Service
                            </NavLink>
                        </MenuItem>
                        <MenuItem m='1em'>
                            <NavLink to='/'>
                                About
                            </NavLink>
                        </MenuItem>
                        <Button bgColor='white' color='black' borderRadius='2em' w='8em'>Register</Button>
                        <Button bgColor='black' color='white' _hover='none' borderRadius='2em'>Login</Button>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}
