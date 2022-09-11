import { Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header/Header';
import AboutSection from './About';
import { BlogSection } from './Blog';
import AfterTestimonial from './AfterTestimonials';

export default function HomePage() {
    return (
        <Stack>
            <Header />
            <AboutSection />
            <AfterTestimonial />
            <BlogSection />
        </Stack>
    )
}