import React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import "./header.css"
import WelcomeBox from './IntroSec'

export default function Header() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box background='#0A2640' height={onMobile ? '85em' : '49.875em'} >
            <WelcomeBox />
        </Box>
    )
}