import React from 'react'
import { Box } from '@chakra-ui/react'
import "./header.css"
import WelcomeBox from './IntroSec'

export default function Header() {
    return (
        <Box background='#0A2640' height={'49.875em'} >
            <WelcomeBox />
        </Box>
    )
}