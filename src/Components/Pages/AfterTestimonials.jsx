import React from 'react';
import { Box, Heading, HStack, Image, List, Stack, VStack, ListItem, ListIcon } from '@chakra-ui/react';
import WorkEnv from "../../Images/work-env.png"
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function AfterTestimonial() {
    return (
        <Box bg='white' w='100%' h='20em' p={4}>
            <Stack justify='center' align='center'>
                <Stack w='80%' justify='center' align='center' pt='5em'>
                    <Image src={WorkEnv} alt='work env' />
                </Stack>
                <HStack pt='4.5em'>
                    <Box mr='5.5em'>
                        <Heading fontFamily='Manrope' fontSize='2em' fontWeight='400' dropShadow={'.5rem .5rem 1rem'} >We connect our customers <br />
                            with the best, and help <br />
                            them keep up-and stay open.
                        </Heading>
                    </Box>
                    <VStack>
                        <List>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em' mb='2.5em'>
                                We connect our customers with the best?.
                                <ListIcon as={CheckCircleIcon} color='black.500' ml='2.5em' />
                            </ListItem>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans' lineHeight='1.5em'>
                                Android research & development rockstar?
                                <ListIcon as={CheckCircleIcon} color='black.500' ml='2em' />
                            </ListItem>
                        </List>
                    </VStack>
                </HStack>
            </Stack>
        </Box>
    )
}


export function BlogSection() {
    return (
        <Box>

        </Box>
    )
}