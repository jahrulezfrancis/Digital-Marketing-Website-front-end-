import React from 'react';
import HeroGraphic from "../../Images/herographics.svg"
import Sideone from "../../Images/Group1.png"
import Sidetwo from "../../Images/Group264.png"
import { HStack, Image } from '@chakra-ui/react';

export default function SideImages() {
    return(
        <HStack>
            <Image src={Sideone} />
            <Image src={Sidetwo} />
            <Image src={HeroGraphic} />
        </HStack>
    )
}