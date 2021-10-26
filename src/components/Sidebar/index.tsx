import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        
        <NavSection title="GERAL" >
          <NavLink icon={RiDashboardLine} >Dashboard</NavLink>
          <NavLink icon={RiContactsLine} >Usuários</NavLink>
        </NavSection>
        
        <NavSection title="AUTOMAÇÃO" >
          <NavLink icon={RiInputMethodLine} >Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} >Automação</NavLink>
        </NavSection >  


        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
          <Stack spacing="4" mt="8" align="stretch" >
            
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};