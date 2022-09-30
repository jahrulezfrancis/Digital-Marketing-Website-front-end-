import React from 'react';
import { Box, Heading, HStack, Image, List, Stack, VStack, ListItem, ListIcon, useMediaQuery, Flex } from '@chakra-ui/react';
import WorkEnv from "../../Images/work-env.png"
import { CheckCircleIcon } from '@chakra-ui/icons';
import { BlogSection } from './Blog';

export default function AfterTestimonial() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box bg='white' w='100%' p={4}>
            <Stack  justify='center' align='center'>
                <Stack w={onMobile ? '100%' : '80%'} pt={onMobile ? '0em' : '5em'}>
                    <Image src={WorkEnv} alt='work env' />
                </Stack>
                <Flex pt='4.5em' direction={onMobile ? 'column' : 'row'} justify={onMobile ? 'center' : 'start'} wrap='wrap' align={onMobile ? 'center' : 'start'}>
                    <Flex mb={onMobile ? '1em' : '2em'} justify={onMobile ? 'center' : 'start'} mr={onMobile ? '0em' : '5.5em'}>
                        <Heading textAlign={onMobile ? 'center' : 'start'} fontFamily='Manrope' fontSize='2em' fontWeight='400' dropShadow={'.5rem .5rem 1rem'} >
                            We connect our customers <br />
                            with the best, and help <br />
                            them keep up-and stay open.
                        </Heading>
                    </Flex>
                    <VStack>
                        <List textAlign={onMobile ? 'center' : 'flex-start'}>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans'
                                lineHeight='1.5em' mb='2.5em'>
                                We connect our customers with the best?.
                                <ListIcon as={CheckCircleIcon} color='black.500' ml={onMobile ? '.5em' : '2em'} />
                            </ListItem>
                            <ListItem fontWeight='400' fontSize='1.2em' fontFamily='Open Sans'
                                lineHeight='1.5em'>
                                Android research & development rockstar?
                                <ListIcon as={CheckCircleIcon} color='black.500' ml={onMobile ? '.5em' : '2em'} />
                            </ListItem>
                        </List>
                    </VStack>
                </Flex>
            </Stack>
            <Box>
                <BlogSection />
            </Box>
        </Box>
    )
}