import React from 'react';
import Sideone from "../../Images/Group1.png"
import Sidetwo from "../../Images/Group264.png"
import { VStack, HStack, Image, Box, } from '@chakra-ui/react';
import "./header.css"
import FirstOne from "../../Images/Logo.png"
import SecondOne from "../../Images/Logo2.png"
import Thirdone from "../../Images/Logo3.png"

export default function SideImages() {
    return (
        <VStack mt='1em' display='flex' justify='flex-end' flex={'1'} flexWrap='wrap'>
            <Image src={Sideone} w='30.813em' h='15em' />
            <HStack pt='.4em' gap={14}>
                <Image src={Sidetwo} boxSize='10.036em' />
                <Image src={Sidetwo} />
            </HStack>
        </VStack>
    )
}

export function BottomImage() {
    return (
            <HStack display='flex' p='3.2em .7em' justify='center' className='bottom-section' 
            alignItems='center'  flexWrap='wrap' flex='1' direction='row'>
                <Image src={FirstOne} alt='first logo' />
                <Image src={SecondOne} alt='second logo' />
                <Image src={Thirdone} alt='third logo' />
                <Image src={FirstOne} alt='first logo' />
                <Image src={SecondOne} alt='second logo' />
                <Image src={Thirdone} alt='third logo' />
            </HStack>
    )
}