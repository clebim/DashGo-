import { Flex, Text, Box, Avatar } from "@chakra-ui/react"

type ProfileProps = {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex
      align="center"
    >
      {
        showProfileData && (
          <Box mr="4" textAlign="right" >
            <Text>Matheus Cleber</Text>
            <Text color="gray.300" fontSize="small" >matheuscleber1998@gmail.com</Text>
          </Box>
        )
      }
      <Avatar size="md" name="Matheus Cleber" src="https://github.com/clebim.png" />
    </Flex>
  );
}