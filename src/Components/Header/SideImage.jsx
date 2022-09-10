import React from 'react';
import Sideone from "../../Images/Group1.png"
import Sidetwo from "../../Images/Group264.png"
import { VStack, HStack, Image, Spacer } from '@chakra-ui/react';

export default function SideImages() {
    return (
        <VStack padding={'1em'} mt='1em' display='flex' justify='flex-end'>
            <Image src={Sideone} w='30.813em' />
            <HStack pt='.4em' gap={14}>
                <Image src={Sidetwo} boxSize='10.036em' />
                <Image src={Sidetwo} />
            </HStack>
        </VStack>
    )
}