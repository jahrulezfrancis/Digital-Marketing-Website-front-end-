import { Box } from '@chakra-ui/react';
import React from 'react';
import { AboutUs, ImageSection, OurStory, Team } from '../AboutUs';

export default function AboutIndex() {
    return (
        <Box>
            <AboutUs />
            <ImageSection />
            <OurStory />
            <Team />
        </Box>
    )
}