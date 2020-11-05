import { Avatar, Flex, Text } from '@chakra-ui/core';

function Welcome(): JSX.Element {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="xl"
      w="100vw"
      bgColor="brand"
    >
      <Avatar name="Basix" src="/basixlab.png" size="2xl" />
      <Text fontSize="4xl" mt="8">
        Sung Jeon
      </Text>
      <Text fontSize="xl" mt="4">
        Web Developer
      </Text>
    </Flex>
  );
}

export default Welcome;
