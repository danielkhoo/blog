import { Flex, useColorMode } from '@chakra-ui/react'

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      minHeight="100vh"
      direction="column"
      justifyContent="start"
      alignItems="center"
    >
      <Flex
        maxWidth="800px"
        width="100%"
        minHeight="100vh"
        direction="column"
        // bg="#CCC"
        // bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </Flex>

  )
}
