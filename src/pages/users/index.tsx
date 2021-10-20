import { Flex, 
  Box, 
  Heading, 
  Button, 
  Checkbox,
  Icon, 
  Text,
  Table, 
  Thead, 
  Tr,
  Th,
  Tbody,
  Td
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/header';
import { Pagination } from '../../components/pagination';
import { Sidebar } from '../../components/sidebar';

export default function Users() {
  return (
    <Flex direction="column" h="100vh" >
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >Usuários</Heading>
            <Button 
              as="a" 
              size="sm" 
              fontSize="small" 
              colorScheme="pink" 
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8" ></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6"  >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Matheus Cleber</Text>
                    <Text fontSize="small" color="gray.300">matheuscleber1998@gmail.com</Text>
                  </Box>
                </Td>
                <Td>19 de outubro, 2021</Td>
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="small" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex> 
    </Flex>   
  )
}