import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header/Header';
import AboutSection from './About';
import AfterTestimonial from './AfterTestimonials';
import { BlogSection } from './Blog';

export default function HomePage() {
    return (
        <Box>
            <Header />
            <AboutSection />
            <AfterTestimonial />
        </Box>
    )
}