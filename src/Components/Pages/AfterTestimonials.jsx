import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import WorkEnv from "../../Images/work-env.png"

export default function AfterTestimonial() {
    return (
        <Box bg='white' w='100%' h='20em' p={4}>
            <Image src={WorkEnv} justifyContent='center' align='center' />
            <Heading color=''>We connect our customers <br />
                with the best, and help <br />
                them keep up-and stay open.
            </Heading>
        </Box>
    )
}