import { Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"  
    >
      dashgo
      <Text color="pink.500" marginLeft="1" as="span">.</Text>
    </Text>
  )
}