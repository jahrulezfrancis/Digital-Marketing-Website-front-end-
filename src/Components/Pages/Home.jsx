import { Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header/Header';
import AboutSection from './About';

export default function HomePage() {
    return(
        <Stack>
            <Header />
            <AboutSection />
        </Stack>
    )
}