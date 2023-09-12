import React from 'react'
import { Avatar, Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Signup() {
    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"8"}>

                    <Heading textAlign={"center"}>Video Streaming Frontend</Heading>
                    <Avatar alignSelf={"center"} boxSize={"32"}/>

                    <Input placeholder={"Name"} type='text' required focusBorderColor={"purple.500"}/>

                    <Input placeholder={"Email"} type='email' required focusBorderColor={"purple.500"}/>

                    <Input placeholder={"Password"} type='password' required focusBorderColor={"purple.500"}/>

                    <Button variant={'ghost'} colorScheme={"purple"} outlineColor={"purple.500"} type={'submit'}>Sign Up</Button>
                    
                    <Text textAlign={"right"}>
                        Already a User ? {" "}
                        <Button variant={'link'} colorScheme='purple'>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                    </Text>
                    

                    
                </VStack>
            </form>
        </Container>
    )
}

export default Signup
