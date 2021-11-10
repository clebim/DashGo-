import { Box, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

export const SideBarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL" >
        <NavLink href="/dashboard" icon={RiDashboardLine} >Dashboard</NavLink>
        <NavLink href="/users" icon={RiContactsLine} >Usuários</NavLink>
      </NavSection>
      
      <NavSection title="AUTOMAÇÃO" >
        <NavLink href="/forms" icon={RiInputMethodLine} >Formulários</NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine} >Automação</NavLink>
      </NavSection >  


      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
        <Stack spacing="4" mt="8" align="stretch" >
          
        </Stack>
      </Box>
    </Stack>
  )
}