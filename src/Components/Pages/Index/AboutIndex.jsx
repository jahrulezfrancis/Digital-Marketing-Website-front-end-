import { Box } from '@chakra-ui/react';
import React from 'react';
import { AboutUs, ImageSection, OurStory } from '../AboutUs';

export default function AboutIndex() {
    return (
        <Box>
            <AboutUs />
            <ImageSection />
            <OurStory />
        </Box>
    )
}