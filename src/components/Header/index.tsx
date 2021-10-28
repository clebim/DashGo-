import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { Logo } from "../Header/logo";
import { NotificationNav } from "../Header/notificationsNav";
import { Profile } from "../Header/profile";
import { SearchBox } from "../Header/searchBox";

export const Header = () => {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {
        !isWideVersion && (
          <IconButton 
            icon={<Icon as={RiMenuLine} />} 
            aria-label="open navigation"
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          >
          </IconButton>
        )
      }

      <Logo />
      {
        isWideVersion && (
          <SearchBox />
        )
      }
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}

