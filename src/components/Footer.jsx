import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
            <Stack direction={["column", "row"]}>
                <VStack alignItems={"stretch"} w={"full"} px={"4"} >
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center", "left"]}>
                        Subscribe to get updates
                    </Heading>
                    <HStack 
                        borderBottom={"2px solid white"}
                        py={"2"}
                    >
                        <Input placeholder='Enter Email Here ...' border={"none"} borderRadius={"none"} outline={"none"} />
                        <Button
                            p={"0"}
                            colorScheme='purple'
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"}
                        >
                            <AiOutlineSend size={20}/>
                        </Button>
                    </HStack>
                </VStack>
                <VStack 
                    w={"full"} 
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >
                    <Heading textTransform={"uppercase"} textAlign={"center"} >
                        Video Streaming Frontend
                    </Heading>
                    <Text>All rights reserved.</Text>
                </VStack>
                <VStack w={"full"}>
                    <Heading size={"md"} textTransform={"uppercase"}>
                        Social media
                    </Heading>
                    <Button variant={"link"} colorScheme={'white'}>
                        <Link to="https://github.com/sarthaknegi296" target={'_blank'}>Github</Link>
                    </Button>
                    <Button variant={"link"} colorScheme={'white'}>
                        <Link to="https://www.instagram.com/sarthaknegi81/" target={'_blank'}>Instagram</Link>
                    </Button>

                </VStack>
                
            </Stack>
        </Box>
    )
}

export default Footer
