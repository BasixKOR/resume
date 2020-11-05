import {
  Avatar,
  Center,
  Flex,
  Text,
  Box,
  useBreakpointValue,
} from '@chakra-ui/core';

import Menu from 'components/Welcome/Menu';

function Welcome(): JSX.Element {
  const name = useBreakpointValue({
    base: 'Basix',
    sm: 'Sung Jeon',
    md: 'Sung Jeon (Basix)',
  });

  return (
    <>
      <Menu />
      <Center as="header" h="xl" w="100vw" bgColor="brand">
        <Flex
          borderWidth="px"
          borderRadius="lg"
          bgColor="white"
          alignItems="center"
          p="8"
        >
          <Avatar name="Basix" src="/basixlab.png" size="2xl" />
          <Box textAlign="right" ml="8">
            <Text fontSize="4xl" color="black">{name}</Text>
            <Text fontSize="xl" color="gray.400">
              Web Developer
            </Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
}

export default Welcome;
