import { Box, HStack } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <HStack shadow='dark-lg'>
      <Box>Logo</Box>
      <Box>Logout</Box>
    </HStack>
  )
}

export default Navbar
