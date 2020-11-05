import { Flex, Button, Spacer, Switch, useColorMode } from "@chakra-ui/core";

function Menu(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return <Flex as="nav" bgColor="brand" h="3rem" alignItems="center" position="fixed" top="0" left="0" w="100vw" boxSizing="border-box">
    <Button variant="link" colorScheme="black" ml="4">Home</Button>
    <Button variant="link" colorScheme="black" ml="4">Profile</Button>
    <Spacer />
    <Switch mr="4" isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme="black" />
  </Flex>
}

export default Menu;
