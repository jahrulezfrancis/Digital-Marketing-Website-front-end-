import { Button, Flex, Stack, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { ListItem, Box, UnorderedList, Image } from '@chakra-ui/react'
import "./header.css"
import WelcomeBox from './IntroSec'

export default function Header() {
    return (
        <Box background='#0A2640' height={'500px'} >
            <WelcomeBox />
        </Box>
    )
}