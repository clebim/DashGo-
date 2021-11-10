import Link from 'next/link';
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
  Td,
  useBreakpointValue
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function Users() {

  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="small" 
                colorScheme="pink" 
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWiderVersion && <Th>Data de cadastro</Th>}
                <Th width="8" ></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}  >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Matheus Cleber</Text>
                    <Text fontSize="small" color="gray.300">matheuscleber1998@gmail.com</Text>
                  </Box>
                </Td>
                {isWiderVersion && <Td>19 de outubro, 2021</Td>}
                {
                  isWiderVersion &&
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
                }
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex> 
    </Flex>   
  )
}