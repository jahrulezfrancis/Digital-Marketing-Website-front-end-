import { Box } from '@chakra-ui/react';
import React from 'react';
import { AboutUs, ImageSection, OurStory, OurValues, Team } from '../AboutUs';

export default function AboutIndex() {
    return (
        <Box>
            <AboutUs />
            <ImageSection />
            <OurStory />
            <Team />
            <OurValues />
        </Box>
    )
}