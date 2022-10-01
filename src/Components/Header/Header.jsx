import React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import "./header.css"
import WelcomeBox from './IntroSec'

export default function Header() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box background='#0A2640' height={onMobile ? '95em' : '49.875em'} minH='90'>
            <WelcomeBox />
        </Box>
    )
}