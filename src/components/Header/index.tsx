import { Flex, Text } from "@chakra-ui/react"
import { Logo } from "../Header/logo";
import { NotificationNav } from "../Header/notificationsNav";
import { Profile } from "../Header/profile";
import { SearchBox } from "../Header/searchBox";

export const Header = () => {
  return (
    <Flex 
      as="header" 
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    > 
      <Logo />
      <SearchBox />
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  )
}

