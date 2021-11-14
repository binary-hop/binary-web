import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Flex, HStack,  Text, Image } from "@chakra-ui/react"


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Binary Hop</title>
      </Head>
      <Flex bgColor="background" h="100vh" pl="40px" pr="40px">
        {/* <Box h="90px"> */}
          <Flex h="90px" w="100%" justify="space-between">
            <HStack align="center" spacing="30px">
              <Box h="40px" w="40px">
                <Image src="/icons/hop.svg" alt="Segun Adebayo" />
              </Box>
              <Text color="blue.100" fontFamily="barlow" fontWeight="300" fontSize="32px">
                Binary Hop
              </Text>
            </HStack>
            <HStack spacing="24px">
              <Box w="40px" h="40px" bg="yellow.200">
                1
              </Box>
              <Box w="40px" h="40px" bg="tomato">
                2
              </Box>
              <Box w="40px" h="40px" bg="pink.100">
                3
              </Box>
            </HStack>
          </Flex>
        {/* </Box> */}
      </Flex>
    </>
  )
}

export default Home
