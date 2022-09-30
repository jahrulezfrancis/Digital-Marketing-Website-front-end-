import React from 'react';
import { Box, VStack, Text, Heading, HStack, Image, Flex, Avatar, Stack, Button, Input, useMediaQuery, List, ListItem } from '@chakra-ui/react';
import FirstOne from "../../Images/Job-seeker.png"
import SecondOne from "../../Images/pers-near-trash.png"
import ThirdOne from "../../Images/woman-on-couch.png"
import FooterLogo from "../../Images/footer-logo.png"


export const PostTemplate = (props) => {
    return (
        <Box h='30em'>
            <Image src={props.image} />
            <VStack align='start'>
                <HStack align='start' pt='2em' pb='1em'>
                    <Text fontSize='1em' fontFamily="Open Sans" fontWeight='700' color='#0A2640'>Category</Text>
                    <Text fontSize='1em' fontFamily="Open Sans" fontWeight='400' color='#777777'>November 22, 2022</Text>
                </HStack>
                {props.text}
                <HStack>
                    <Flex gap='3' alignItems='flex-end' justify='flex-end' >
                        <Avatar size='sm' name='Jahrulez Francis' src={FirstOne} />
                        <Flex direction='column' p='.2em'>
                            <Text>Longsaar Francis</Text> <br />
                        </Flex>
                    </Flex>
                </HStack>
            </VStack>
        </Box>
    )
}


export const NewsLetter = () => {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box width='100%' height={onMobile ? '40em' : '20em'} bgColor='#0A2640' mt='5em' borderRadius='.9em' >
            <Stack width='100%'>
                <VStack>
                    <Text mt='1.2em' mb='1em' textAlign='center' color='white' fontSize='2.5em' lineHeight='1.5em' fontFamily='Manrope'>
                        An enterprise template to ramp <br />
                        up your company website
                    </Text>
                    <Flex justifyContent={onMobile ? 'center' : 'start'} alignItems={onMobile ? 'center' : 'start'} gap={4} direction={onMobile ? 'column' : 'row'}>
                        <Input placeholder='Your Email Address' h='3.5em' width='20em' borderRadius='3.5em' bgColor='#ffffff' />
                        <Button width='13em' p='1.3em' h='3.5em' borderRadius='3.5em' bgColor='#65E4A3'>Start Now</Button>
                    </Flex>
                </VStack>
            </Stack>
        </Box>
    )
}



export const Footer = () => {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box mt={onMobile ? '5em' : '10em'}>
            <Flex justify={onMobile ? 'center' : 'space-between'} direction={onMobile ? 'column' : 'row'} align='center' gap='3'>
                <VStack>
                    <Stack >
                        <Box as={Flex} width='20em' mt='-2.5em' justify={onMobile ? 'center' : 'start'}>
                            <Image src={FooterLogo} alt='Footer Logo' objectFit='cover' />
                        </Box>
                        <Stack >
                            <Text lineHeight='2em' textAlign={onMobile ? 'center' : 'left'}
                                fontFamily='Open Sans' fontWeight={400} color='#777777' fontSize='1em'>
                                Social media validation business model <br />
                                canvas graphical user interface launch  <br />
                                party creative facebook iPad twitter.
                            </Text>
                        </Stack>
                    </Stack>

                </VStack>
                <List lineHeight='3em' textAlign={onMobile ? 'center' : 'left'}>
                    <ListItem><Heading>Landing</Heading> </ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Product</ListItem>
                    <ListItem>Service</ListItem>
                </List>
                <List lineHeight='3em' textAlign={onMobile ? 'center' : 'left'}>
                    <ListItem><Heading textAlign='center'>Company</Heading> </ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Career</ListItem>
                    <ListItem>Service</ListItem>
                </List>
                <List lineHeight='3em' textAlign={onMobile ? 'center' : 'left'}>
                    <ListItem><Heading>Resources</Heading> </ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Product</ListItem>
                    <ListItem>Service</ListItem>
                </List>
            </Flex>
            <Stack align='center' justify='center' m='2em'>
                <Text textAlign='center' color='black.300' fontWeight='bold'>All rights reserved | Designed By 7thWeb</Text>
            </Stack>
        </Box>
    )
}


export function BlogSection() {
    return (
        <Box w="100%" h='27em'>
            <Stack align='center'>
                <VStack pt='8em'>
                    <Text fontFamily='Open Sans' fontSize='1.25em'>Our Blog</Text>
                    <Heading textAlign='center' fontFamily='Manrope' fontWeight='400' lineHeight='1.5em'>
                        Value proposition accelerator product <br />
                        management venture
                    </Heading>
                </VStack>
                <HStack gap='8'>
                    <PostTemplate
                        image={FirstOne}
                        text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                            Pitch termsheet backing <br />
                            validation focus release
                        </Text>}
                    />
                    <PostTemplate
                        image={SecondOne}
                        text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                            Seed round direct mailing non- <br />
                            disclosure agreement graphical <br />
                            user interface rockstar.
                        </Text>}
                    />
                    <PostTemplate
                        image={ThirdOne}
                        text={<Text fontSize='1.25em' fontFamily="Open Sans" fontWeight='400' lineHeight='2em'>
                            Beta prototype sales iPad gen-z <br />
                            marketingnetwork effects value <br />
                            proposition
                        </Text>}
                    />
                </HStack>
                <Button fontFamily='Open Sans' borderRadius='3em' border='solid 1px #0A2640' p='1.3em'
                    width='10em' fontSize='1.2em' fontWeight='700'>
                    Load More
                </Button>
            </Stack>
            <NewsLetter />
            <Footer />
        </Box>
    )
}

